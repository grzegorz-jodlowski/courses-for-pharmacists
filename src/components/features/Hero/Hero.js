import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Hero.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <section className={clsx(className, styles.hero)}>
    <div className={styles.hero__description}>
      <h1 className={styles.hero__title}>Oglądaj, słuchaj i poczuj się pewnie w aptece!</h1>
      <p className={styles.hero__subtitle}>Praktyczne kursy dla farmaceutów</p>
      <button>Zobacz więcej!</button>
    </div>
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

