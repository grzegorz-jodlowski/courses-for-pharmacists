import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Info.module.scss';

const Component = ({ className, children, variant }) =>
  <div className={clsx(className, styles.root, styles[variant])}>
    {children}
  </div>;

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export {
  Component as Info,
  Component as InfoComponent, //for tests
};

