import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Newsletter.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
        <h2>Zapisz się na newsletter i odbierz darmowe rozdziały oferowanych kursów!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Imię:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          </label>
          <p>Zapisując się na newsletter wyrażasz zgodę na przesyłanie informacji o produktach, nowościach i promocjach ze strony Kursy dla Farmaceutów.</p>
          <input type="submit" value="Wyślij" />
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

