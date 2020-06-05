import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyCourses.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>MyCourses</h2>
    {children}
  </div>
);

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
  Component as MyCourses,
  // Container as MyCourses,
  Component as MyCoursesComponent, //for tests
};

