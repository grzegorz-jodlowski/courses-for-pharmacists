import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Button.module.scss';

import { Link } from 'react-router-dom';

const Component = ({ className, path, text, action, submitForm }) =>
  submitForm ?
    <input
      className={clsx(className, styles.input)}
      type='submit'
      value={text}
    />
    :
    <button
      className={clsx(className, styles.button)}
      onClick={action || null}
    >
      <Link to={`${process.env.PUBLIC_URL}/${path || ''}`}>{text}</Link>
    </button>;

Component.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string,
  action: PropTypes.func,
  submitForm: PropTypes.bool,
};

export {
  Component as Button,
  Component as ButtonComponent, //for tests
};

