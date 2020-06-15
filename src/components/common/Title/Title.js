import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Title.module.scss';

const Component = ({ className, children, decoration }) => (
  <div>
    <h2 className={clsx(className, styles.root)}>
      {children}
      {decoration && <div className={styles.underscore}></div>}
    </h2>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  decoration: PropTypes.bool,
};

export {
  Component as Title,
  Component as TitleComponent, //for tests
};

