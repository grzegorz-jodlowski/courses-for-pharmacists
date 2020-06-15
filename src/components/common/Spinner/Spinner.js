import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Spinner.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.spinner}></div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Spinner,
  Component as SpinnerComponent, //for tests
};

