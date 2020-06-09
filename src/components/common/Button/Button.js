import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.scss';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, path, text, action, submitForm }) => {

  return (
    submitForm ?
      <input className={clsx(className, styles.input)} type="submit" value={text} />
      :
      <button className={clsx(className, styles.button)} onClick={action || null}><Link to={`${process.env.PUBLIC_URL}/${path || ''}`} >{text}</Link></button>
  );

};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
  submitForm: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Button,
  // Container as Button,
  Component as ButtonComponent, //for tests
};

