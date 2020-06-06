import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavButton.module.scss';

import { Link } from 'react-router-dom';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, text, path }) => (
  <Link to={`${process.env.PUBLIC_URL}/${path}`} className={clsx(className, styles.root)}>
    {text}
  </Link>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavButton,
  // Container as NavButton,
  Component as NavButtonComponent, //for tests
};

