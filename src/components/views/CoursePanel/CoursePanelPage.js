import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CoursePanelPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Spinner } from '../../common/Spinner/Spinner';

import { connect } from 'react-redux';

const Component = ({ className, children, courses, match }) => {
  const course = courses.find(course => course._id === match.params._id);

  if (course) {
    return (
      <div className={clsx(className, styles.root, 'container')}>
        <Title decoration={true} >{`Panel kursu: ${course.title}`}</Title>
        {children}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  courses: PropTypes.array,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  courses: state.courses.data,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as CoursePanelPage,
  Component as CoursePanelPageComponent, //for tests
};

