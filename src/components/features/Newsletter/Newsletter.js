import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Newsletter.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {
  state = {
    name: '',
    email: '',
  };

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    alert(`Imię: ${this.state.name}, Email: ${this.state.email}`);
    this.setState({ name: '', email: '' });
    event.preventDefault();
  }

  render() {

    return (
      <section className={clsx(styles.root)}>
        <h2 className={styles.title}>Zapisz się na newsletter i odbierz darmowe rozdziały oferowanych kursów!</h2>
        <form className={styles.form} onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">Imię:</label>
          <input name="name" id="name" required className={styles.inputName} type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
          <label htmlFor="email">Email:</label>
          <input name="email" id="email" required className={styles.inputEmail} type="text" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
          <p className={styles.disclaimer} >Zapisując się na newsletter wyrażasz zgodę na przesyłanie informacji o produktach, nowościach i promocjach ze strony Kursy dla Farmaceutów.</p>
          <input className={styles.submitButton} type="submit" value="Zapisz mnie i wyślij rozdziały!" />
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

