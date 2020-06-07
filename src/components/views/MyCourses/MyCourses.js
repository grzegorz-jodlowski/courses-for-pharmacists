import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyCourses.module.scss';

import { Login } from '../Login/Login';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, isLogged }) => {

  if (isLogged) {
    return (
      <main className={clsx(className, styles.root, 'container')}>
        <h2>MyCourses</h2>
        {children}
      </main>
    );
  } else {
    return <Login />;
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MyCourses,
  Container as MyCourses,
  Component as MyCoursesComponent, //for tests
};

