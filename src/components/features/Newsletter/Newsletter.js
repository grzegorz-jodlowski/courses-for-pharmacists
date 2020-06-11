import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Newsletter.module.scss';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    alert(`Imię: ${this.state.name}, Email: ${this.state.email}`);
    this.setState({ name: '', email: '' });
    e.preventDefault();
  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, email } = this.state;


    return (
      <section className={clsx(styles.root)} >
        <Title decoration={true}>Zapisz się na newsletter i odbierz darmowe rozdziały oferowanych kursów!</Title>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Imię <span>*</span></label>
          <input name="name" id="name" required className={styles.inputName} type="text" value={name} onChange={handleChange} />
          <label htmlFor="email">Email <span>*</span></label>
          <input name="email" id="email" required className={styles.inputEmail} type="text" value={email} onChange={handleChange} />
          <p className={styles.disclaimer} >Zapisując się na newsletter wyrażasz zgodę na przesyłanie informacji o produktach, nowościach i promocjach ze strony Kursy dla Farmaceutów.</p>
          <Button submitForm={true} text={'Zapisz mnie i wyślij rozdziały!'} />
        </form>
      </section>
    );
  }
}


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Newsletter,
  // Container as Newsletter,
  Component as NewsletterComponent, //for tests
};

