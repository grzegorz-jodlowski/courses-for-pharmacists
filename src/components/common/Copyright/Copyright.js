import React from 'react';
import PropTypes from 'prop-types';

import styles from './Copyright.module.scss';

const Component = ({ className }) => (
  <span className={className}>
    {'Copyright © '}
    <a href="https://github.com/grzegorz-jodlowski" className={styles.link}>
      GJ
    </a>{' '}
    {new Date().getFullYear()}
    {'. '}
  </span>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Copyright,
  Component as CopyrightComponent, //for tests
};

