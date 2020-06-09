import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Face.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <section className={clsx(className, styles.root)}>
    <div className={styles.band}>
      <div className={styles.red}></div>
      <div className={styles.white}></div>
      <div className={styles.blue}></div>
    </div>
    <div className={styles.eyes}></div>
    <div className={styles.dimples}></div>
    <div className={styles.mouth}></div>
  </section>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Face,
  // Container as Face,
  Component as FaceComponent, //for tests
};

