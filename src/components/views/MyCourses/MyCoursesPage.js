import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyCoursesPage.module.scss';

import { LoginPage } from '../Login/LoginPage';
import { CoursesCards } from '../../features/CoursesCards/CoursesCards';
import { Spinner } from '../../common/Spinner/Spinner';
import { Title } from '../../common/Title/Title';

import { connect } from 'react-redux';

const Component = ({ className, courses, loading, loadingError, isLogged, user }) => {

  if (isLogged) {
    const userCourses = user.courses ? courses.filter(course => user.courses.includes(course._id)) : [];

    return (
      <main className={clsx(className, styles.root, 'container')}>
        <Title decoration={true} >Moje Kursy</Title>
        {loading || loadingError ? <Spinner /> : <CoursesCards courses={userCourses} />}
      </main>
    );
  } else {
    return <LoginPage />;
  }
};

Component.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  user: PropTypes.object,
  courses: PropTypes.array,
  loading: PropTypes.bool,
  loadingError: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  user: state.user,
  courses: state.courses.data,
  loading: state.courses.loading.active,
  loadingError: state.courses.loading.error,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as MyCoursesPage,
  Component as MyCoursesPageComponent, //for tests
};

