import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ContactPage.module.scss';

import { Title } from '../../common/Title/Title';

const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root, 'container')}>
    <Title decoration={true} >Kontakt</Title>
  </main>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as ContactPage,
  Component as ContactPageComponent, //for tests
};

