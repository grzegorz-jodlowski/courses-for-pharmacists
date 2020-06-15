import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';

import { Copyright } from '../../common/Copyright/Copyright';

const Component = ({ className }) => (
  <footer className={clsx(className, styles.root)}>
    <p>
      <Copyright />
      {'Korzystając ze strony wyrażasz zgodę na używanie cookies oraz akceptujesz '}
      <Link to={`${process.env.PUBLIC_URL}/terms`} className={styles.link}>
        {'regulamin'}
      </Link>
      {', '}
      <Link to={`${process.env.PUBLIC_URL}/privacy`} className={styles.link}>
        {'politykę prywatności i politykę cookies'}
      </Link>
      {'.'}
    </p>
  </footer>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent, //for tests
};

