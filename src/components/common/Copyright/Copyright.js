import React from 'react';
import PropTypes from 'prop-types';

import styles from './Copyright.module.scss';

const Component = ({ className }) => (
  <span className={className}>
    {'Copyright © '}
    <a href="https://kursydlafarmaceutow.pl" className={styles.link}>
      Kursy dla Farmaceutów
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

