import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CoursesCards.module.scss';

import { CourseCard } from '../CourseCard/CourseCard';

// import { connect } from 'react-redux';
// import { getAll, fetchCourses } from '../../../redux/coursesRedux';

const Component = ({ courses, className }) => (
  <section className={clsx(className, styles.root)} id="CourseCard">
    {courses.map(course => <CourseCard key={course._id} course={course} />)}
  </section>
);


Component.propTypes = {
  className: PropTypes.string,
  courses: PropTypes.array,
};

// const mapStateToProps = state => ({
//   courses: getAll(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchCourses: () => dispatch(fetchCourses()),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CoursesCards,
  // Container as CoursesCards,
  Component as CoursesCardsComponent, //for tests
};

