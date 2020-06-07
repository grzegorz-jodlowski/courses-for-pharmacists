import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { Hero } from '../../features/Hero/Hero';
import { CoursesCards } from '../../features/CoursesCards/CoursesCards';
import { Newsletter } from '../../features/Newsletter/Newsletter';

import { connect } from 'react-redux';
import { getAll, fetchCourses } from '../../../redux/coursesRedux';

class Component extends React.Component {
  componentDidMount() {
    const { fetchCourses } = this.props;
    fetchCourses();
  }

  render() {
    const { className, courses } = this.props;
    return (
      <main className={clsx(className, styles.root, 'container')
      }>
        <Hero />
        <CoursesCards courses={courses} />
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
};

const mapStateToProps = state => ({
  courses: getAll(state),
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

