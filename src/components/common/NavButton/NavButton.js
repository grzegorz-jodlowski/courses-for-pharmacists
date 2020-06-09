import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavButton.module.scss';

import { Link } from 'react-router-dom';


// import { connect } from 'react-redux';
// import { updateLoginStatus } from '../../../redux/loginRedux';

const Component = ({ className, children, text, path, action }) => (
  <Link to={`${process.env.PUBLIC_URL}/${path}`} className={clsx(className, styles.root)} onClick={action}>
    {text}
  </Link>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  action: PropTypes.func,
};

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = dispatch => ({
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NavButton,
  // Container as NavButton,
  Component as NavButtonComponent, //for tests
};

