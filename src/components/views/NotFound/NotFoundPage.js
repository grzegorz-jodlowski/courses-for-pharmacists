import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFoundPage.module.scss';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Face } from '../../common/Face/Face';

const Component = ({ className }) =>
  <main className={clsx(className, styles.root, 'container')}>
    <Face />
    <Title >Ups! Nie znalazłem tej strony!</Title>
    <Button text='Wróć do strony głównej' />
  </main>;

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFoundPage,
  Component as NotFoundPageComponent, //for tests
};

