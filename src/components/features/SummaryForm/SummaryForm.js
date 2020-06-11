import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SummaryForm.module.scss';

import { Title } from '../../common/Title/Title';
import { Button } from '../../common/Button/Button';

import { Link } from 'react-router-dom';

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


  handleChange = ({ target }) => {
    const { contact } = this.state;
    const { value, name, type } = target;
    if (type !== 'checkbox') {

      this.setState({ contact: { ...contact, [name]: value } }, () => console.log(this.state.contact));
    } else {
      this.setState({ contact: { ...contact, [name]: !contact[name] } }, () => console.log(this.state.contact));

    }
  }

  handleSubmit() {

  }

  render() {
    const { handleSubmit, handleChange } = this;
    const { className } = this.props;
    const { name, email, privacy, terms } = this.state.contact;

    return (
      <form className={clsx(className, styles.root)} action={handleSubmit.bind(this)}>
        <label htmlFor="name">Imię <span>*</span></label>
        <input name="name" id="name" required className={styles.inputName} type="text" value={name} onChange={handleChange} />
        <label htmlFor="email">Email <span>*</span></label>
        <input name="email" id="email" required className={styles.inputEmail} type="text" value={email} onChange={handleChange} />
        <label htmlFor="privacy" className={styles.labelPrivacy}>
          <input name="privacy" id="privacy" required className={styles.inputPrivacy} type="checkbox" value={privacy} onChange={handleChange} />
          <p>
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celach i zakresie zgodnym z<Link to={`${process.env.PUBLIC_URL}/privacy`} className={styles.link}>{' Polityką prywatności.'}</Link><span>*</span>
          </p>
        </label>
        <label htmlFor="terms" className={styles.labelTerms}>
          <input name="terms" id="terms" required className={styles.inputTerms} type="checkbox" value={terms} onChange={handleChange} />
          <p>
            Akceptuję <Link to={`${process.env.PUBLIC_URL}/terms`} className={styles.link}>{' regulamin zakupów '}</Link><span>*</span>
          </p>
        </label>
        <Button submitForm={true} text={'Zamawiam i płacę'} path={'summary'} />
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

