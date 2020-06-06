import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Hero.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';


// TODO: scroll on click

const Component = ({ className, children }) => (
  <section className={clsx(className, styles.hero)}>
    <div className={styles.arrow}></div>
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
  Component as Hero,
  // Container as Hero,
  Component as HeroComponent, //for tests
};

