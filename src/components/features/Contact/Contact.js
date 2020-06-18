import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Axios from 'axios';

import { api } from '../../../settings';

import styles from './Contact.module.scss';

import { Button } from '../../common/Button/Button';
import { Info } from '../../common/Info/Info';
import { Spinner } from '../../common/Spinner/Spinner';
import { Modal } from '../../common/Modal/Modal';

class Component extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    postError: false,
    validationError: null,
    loading: false,
    success: false,
  };
  handleSubmit = (e) => {
    const { name, email, message } = this.state;

    e.preventDefault();

    let error = null;

    const emailPattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'g');

    if (!name.length || !email.length || !message.length) error = `Uzupełnij imię, email i wiadomość`;
    else if (name.length > 50 || name.length < 5) error = `Imię może zawierać 5-50 znaków`;
    else if (message.length < 10) error = `Wiadomość nie może być krótsza niż 10 znaków`;
    else if (!emailPattern.test(email)) error = `Nieprawidłowy adres email`;

    if (!error) {

      this.setState({ loading: true });

      Axios
        .post(`${api.url}/${api.messages}`, { name, email, message })
        .then(res => {
          this.setState({
            name: '',
            email: '',
            message: '',
            postError: false,
            validationError: null,
            loading: false,
            success: true,
          });
        })
        .catch(err => {
          this.setState({
            postError: true,
            loading: false,
            success: false,
          });
        });
    } else {
      this.setState({ validationError: error });
    }


  }
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  clearSuccess = () => {
    this.setState({ success: false });
  }

  render() {
    const { handleSubmit, handleChange, clearSuccess } = this;
    const { name, email, message, loading, postError, validationError, success } = this.state;

    const { className } = this.props;

    return (
      <section className={clsx(className, styles.root)}>
        {(!loading && !postError && success) && <Modal variant={'success'} text={'Zapisano do newslettera'} close={clearSuccess} />}
        {(loading) && <Spinner />}
        {(!loading && !success) &&
          (<>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="name">Imię <span>*</span></label>
              <input name="name" id="name" required className={styles.inputName} type="text" value={name} onChange={handleChange} />
              <label htmlFor="email">Email <span>*</span></label>
              <input name="email" id="email" required className={styles.inputEmail} type="text" value={email} onChange={handleChange} />
              <label htmlFor="message">Wiadomość <span>*</span></label>
              <textarea name="message" id="message" className={styles.inputEmail} value={message} onChange={handleChange} />
              {(validationError) && <Info variant={'warning'}>{validationError}</Info>}
              {(postError) && <Info variant={'error'}>{'Ups... coś poszło nie tak!'}</Info>}
              <Button submitForm={true} text={'Wyślij wiadomość'} />
            </form>
          </>)}
      </section>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Contact,
  Component as ContactComponent, //for tests
};

