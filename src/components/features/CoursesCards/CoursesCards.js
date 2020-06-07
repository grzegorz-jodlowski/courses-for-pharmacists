import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CoursesCards.module.scss';

import { CourseCard } from '../../common/CourseCard/CourseCard';


import { connect } from 'react-redux';
import { getAll } from '../../../redux/coursesRedux';

const Component = ({ className, children, courses }) => (
  <section className={clsx(className, styles.root)} id="CourseCard">
    {courses.map(course => <CourseCard key={course._id} course={course} />)}
  </section>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  courses: PropTypes.array,
};

const mapStateToProps = state => ({
  courses: getAll(state),
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CoursesCards,
  Container as CoursesCards,
  Component as CoursesCardsComponent, //for tests
};

