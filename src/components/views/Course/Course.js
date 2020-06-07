import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Course.module.scss';

import { connect } from 'react-redux';
import { fetchCourseDetails } from '../../../redux/coursesRedux';

class Component extends React.Component {
  componentDidMount() {
    const { fetchCourseDetails, match } = this.props;
    fetchCourseDetails(match.params._id);
  }

  render() {
    const { className, children, course } = this.props;
    console.log(' : Component -> render -> course', course);
    const { title, image, price, _id, chapters, length, gallery, description } = course;

    return (
      <main className={clsx(className, styles.root, 'container')}>
        {title}
        {image}
        {price}
        {_id}
        {chapters}
        {length}
        {gallery}
        {description}
      </main>
    );
  }

}
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  match: PropTypes.object,
  course: PropTypes.object,
  fetchCourseDetails: PropTypes.func,
};

const mapStateToProps = state => ({
  course: state.courses.currentCourse,
});

const mapDispatchToProps = dispatch => ({
  fetchCourseDetails: id => dispatch(fetchCourseDetails(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Course,
  Container as Course,
  Component as CourseComponent, //for tests
};

