import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CourseCard.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <article className={clsx(className, styles.root)}>
    <h2>CourseCard</h2>
    {children}
  </article>
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
  Component as CourseCard,
  // Container as CourseCard,
  Component as CourseCardComponent, //for tests
};

