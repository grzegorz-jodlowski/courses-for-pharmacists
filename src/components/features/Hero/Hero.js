import React from 'react';
import PropTypes from 'prop-types';

import styles from './Hero.module.scss';

const Component = ({ className }) => (
  <a href="#CourseCard" className={className}>
    <section className={styles.hero}>
      <div className={styles.arrow}></div>
    </section>
  </a>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Hero,
  Component as HeroComponent, //for tests
};

