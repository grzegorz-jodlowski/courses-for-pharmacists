import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './RemoveButton.module.scss';

const Component = ({ className, action }) => (
  <button className={clsx(className, styles.root)} onClick={action}><i className={clsx(styles.icon, 'fas fa-times')}></i></button>
);

Component.propTypes = {
  className: PropTypes.string,
  action: PropTypes.func,
};

export {
  Component as RemoveButton,
  Component as RemoveButtonComponent, //for tests
};

