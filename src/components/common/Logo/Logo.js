import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';

import { Link } from 'react-router-dom';

const Component = ({ className, action }) => (
  <Link to={`${process.env.PUBLIC_URL}/`} onClick={action}>
    <div className={clsx(className, styles.root)}>
      <img src="img/logo.png" alt="Logo Kursy dla Farmaceutów" className={styles.logo} />
    </div>
  </Link>
);

Component.propTypes = {
  className: PropTypes.string,
  action: PropTypes.func,
};

export {
  Component as Logo,
  Component as LogoComponent, //for tests
};

