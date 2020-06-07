import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyCourses.module.scss';

import { Login } from '../Login/Login';
import { CoursesCards } from '../../features/CoursesCards/CoursesCards';

import { connect } from 'react-redux';
// import { getAll } from '../../../redux/coursesRedux';

const Component = ({ className, children, isLogged, user, courses }) => {
  if (isLogged) {
    const userCourses = courses.filter(course => user.courses.includes(course._id) ? course : null);

    return (
      <main className={clsx(className, styles.root, 'container')}>
        <CoursesCards courses={userCourses} />
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
  user: PropTypes.object,
  courses: PropTypes.array,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  user: state.user,
  courses: state.courses.data,
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MyCourses,
  Container as MyCourses,
  Component as MyCoursesComponent, //for tests
};

