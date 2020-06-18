import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Axios from 'axios';

import { api } from '../../../settings';

import styles from './Newsletter.module.scss';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Info } from '../../common/Info/Info';
import { Spinner } from '../../common/Spinner/Spinner';
import { Modal } from '../../common/Modal/Modal';

class Component extends React.Component {
  state = {
    name: '',
    email: '',
    postError: false,
    validationError: null,
    loading: false,
    success: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }


  handleSubmit = (e) => {
    const { name, email } = this.state;

    e.preventDefault();

    let error = null;

    const emailPattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'g');

    if (!name.length || !email.length) error = `Uzupełnij imię i email`;
    else if (name.length > 50 || name.length < 2) error = `Imię może zawierać 2-50 znaków`;
    else if (!emailPattern.test(email)) error = `Nieprawidłowy adres email`;

    if (!error) {

      this.setState({ loading: true });

      Axios
        .post(`${api.url}/${api.newsletter}`, { name, email })
        .then(res => {
          this.setState({
            name: '',
            email: '',
            postError: false,
            validationError: null,
            loading: false,
            success: true,
          });
        })
        .catch(err => {
          this.setState({
            validationError: null,
            postError: true,
            loading: false,
            success: false,
          });
        });
    } else {
      this.setState({
        validationError: error,
        postError: false,
      });
    }
  }

  clearSuccess = () => {
    this.setState({ success: false });
  }

  render() {
    const { handleSubmit, handleChange, clearSuccess } = this;
    const { className } = this.props;
    const { name, email, loading, postError, validationError, success } = this.state;

    return (
      <section className={clsx(className, styles.root)} >
        {(!loading && !postError && success) && <Modal variant={'success'} text={'Zapisano do newslettera'} close={clearSuccess} />}
        {(loading) && <Spinner />}
        {(!loading && !success) &&
          (<>
            <Title decoration={true}>Zapisz się na newsletter i odbierz darmowe rozdziały oferowanych kursów!</Title>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="name">Imię <span>*</span></label>
              <input name="name" id="name" required className={styles.inputName} type="text" value={name} onChange={handleChange} />
              <label htmlFor="email">Email <span>*</span></label>
              <input name="email" id="email" required className={styles.inputEmail} type="text" value={email} onChange={handleChange} />
              <p className={styles.disclaimer} >Zapisując się na newsletter wyrażasz zgodę na przesyłanie informacji o produktach, nowościach i promocjach ze strony Kursy dla Farmaceutów.</p>
              {(validationError) && <Info variant={'warning'}>{validationError}</Info>}
              {(postError) && <Info variant={'error'}>{'Ups... coś poszło nie tak!'}</Info>}
              <Button submitForm={true} text={'Zapisz mnie i wyślij rozdziały!'} />
            </form>
          </>)}
      </section>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Newsletter,
  Component as NewsletterComponent, //for tests
};

