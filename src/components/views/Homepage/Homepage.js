import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { Hero } from '../../features/Hero/Hero';
import { CoursesCards } from '../../features/CoursesCards/CoursesCards';
import { Newsletter } from '../../features/Newsletter/Newsletter';

import { connect } from 'react-redux';
import { getAll, fetchCourses } from '../../../redux/coursesRedux';
import { Spinner } from '../../common/Spinner/Spinner';

class Component extends React.Component {
  componentDidMount() {
    const { fetchCourses, courses } = this.props;
    if (courses.length === 0) {
      fetchCourses();
    }
  }

  render() {
    const { className, courses, loading, loadingError } = this.props;
    return (
      <main className={clsx(className, styles.root, 'container')
      }>
        <Hero />
        {loading || loadingError ? <Spinner /> : <CoursesCards courses={courses} />}
        <Newsletter />
      </main>
    );
  }
}
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  courses: PropTypes.array,
  fetchCourses: PropTypes.func,
  loading: PropTypes.bool,
  loadingError: PropTypes.bool,
};

const mapStateToProps = state => ({
  courses: getAll(state),
  loading: state.courses.loading.active,
  loadingError: state.courses.loading.error,
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent, //for tests
};

