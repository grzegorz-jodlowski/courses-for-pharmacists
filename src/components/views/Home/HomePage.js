import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './HomePage.module.scss';

import { Hero } from '../../features/Hero/Hero';
import { CoursesCards } from '../../features/CoursesCards/CoursesCards';
import { Newsletter } from '../../features/Newsletter/Newsletter';
import { Search } from '../../features/Search/Search';
import { Spinner } from '../../common/Spinner/Spinner';
import { Info } from '../../common/Info/Info';

import { connect } from 'react-redux';

const Component = ({ className, courses, loading, loadingError }) =>
  <main className={clsx(className, styles.root, 'container')}>
    <Hero />
    <Search />
    {loading || loadingError ? <Spinner />
      : courses.length ?
        <CoursesCards courses={courses} />
        : <Info className={styles.info} variant='warning'>Brak pasujących kursów</Info>}
    <Newsletter />
  </main>;

Component.propTypes = {
  className: PropTypes.string,
  courses: PropTypes.array,
  loading: PropTypes.bool,
  loadingError: PropTypes.bool,
};

const mapStateToProps = state => ({
  courses: state.courses.displayedCourses,
  loading: state.courses.loading.active,
  loadingError: state.courses.loading.error,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as HomePage,
  Component as HomePageComponent, //for tests
};

