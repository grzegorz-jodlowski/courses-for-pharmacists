import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CoursesCards.module.scss';

import { CourseCard } from '../CourseCard/CourseCard';

const Component = ({ courses, className }) =>
  <section className={clsx(className, styles.root)}>
    {courses.map(course => <CourseCard key={course._id} course={course} />)}
  </section>;

Component.propTypes = {
  className: PropTypes.string,
  courses: PropTypes.array,
};

export {
  Component as CoursesCards,
  Component as CoursesCardsComponent, //for tests
};

