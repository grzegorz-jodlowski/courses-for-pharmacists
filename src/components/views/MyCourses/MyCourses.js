import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MyCourses.module.scss';

import { Login } from '../Login/Login';
import { CoursesCards } from '../../features/CoursesCards/CoursesCards';

import { connect } from 'react-redux';
import { getAll, fetchCourses } from '../../../redux/coursesRedux';

class Component extends React.Component {
  componentDidMount() {
    const { fetchCourses } = this.props;
    fetchCourses();
  }

  render() {
    const { className, children, isLogged, user, courses } = this.props;

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
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  user: PropTypes.object,
  courses: PropTypes.array,
  fetchCourses: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  user: state.user,
  courses: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MyCourses,
  Container as MyCourses,
  Component as MyCoursesComponent, //for tests
};

