import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SummaryForm.module.scss';

import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

class Component extends React.Component {

  state = {
    contact: {
      name: '',
      email: '',
      privacy: false,
      terms: false,
    },
    error: null,
  };

  handleNameChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);

  }
  handlePrivacyChange(event) {
    this.setState({ privacy: !this.state.privacy });
    console.log(this.state.privacy);

  }
  handleTermsChange(event) {
    this.setState({ terms: !this.state.value });
    console.log(this.state.terms);

  }

  handleSubmit() {

  }

  render() {
    const { handleSubmit, handleTermsChange, handlePrivacyChange, handleEmailChange, handleNameChange } = this;
    const { className, children } = this.props;

    return (
      <form className={clsx(className, styles.root)}>
        <label htmlFor="name">Imię <span>*</span></label>
        <input name="name" id="name" required className={styles.inputName} type="text" value={this.state.name} onChange={handleNameChange.bind(this)} />
        <label htmlFor="email">Email <span>*</span></label>
        <input name="email" id="email" required className={styles.inputEmail} type="text" value={this.state.email} onChange={handleEmailChange.bind(this)} />
        <label htmlFor="privacy">Privacy<span>*</span></label>
        <input name="privacy" id="privacy" required className={styles.inputEmail} type="checkbox" value={this.state.privacy} onChange={handlePrivacyChange.bind(this)} />
        <label htmlFor="terms">Terms<span>*</span></label>
        <input name="terms" id="terms" required className={styles.inputEmail} type="checkbox" value={this.state.terms} onChange={handleTermsChange.bind(this)} />
        <Button action={handleSubmit.bind(this)} text={'Zamawiam i płacę'} path={'summary'} />
      </form>
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
  Component as SummaryForm,
  // Container as SummaryForm,
  Component as SummaryFormComponent, //for tests
};

