import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Face.module.scss';

const Component = ({ className }) => (
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
  className: PropTypes.string,
};

export {
  Component as Face,
  Component as FaceComponent, //for tests
};

