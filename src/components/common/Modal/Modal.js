import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Modal.module.scss';

import { Info } from '../../common/Info/Info';

const Component = ({ className, text, variant, close }) =>
  <div className={clsx(className, styles.root)} onClick={close}>
    <div className={styles.modal}>
      <Info variant={variant}>{text}</Info>
      <div className={styles.close} onClick={close}><i className='fas fa-times'></i></div>
    </div>
  </div>;

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  close: PropTypes.func,
};

export {
  Component as Modal,
  Component as ModalComponent, //for tests
};

