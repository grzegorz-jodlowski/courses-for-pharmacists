import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CoursesCards.module.scss';

import { CourseCard } from '../../common/CourseCard/CourseCard';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <section className={clsx(className, styles.root)}>
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
    <CourseCard />
  </section>
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
  Component as CoursesCards,
  // Container as CoursesCards,
  Component as CoursesCardsComponent, //for tests
};

