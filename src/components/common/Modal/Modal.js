import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Modal.module.scss';

import { Info } from '../../common/Info/Info';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, text, variant, close }) => (
  <div className={clsx(className, styles.root)} onClick={close}>
    <div className={styles.modal}>
      <Info variant={'success'}>{text}</Info>
      <div className={styles.close} onClick={close}><i className={'fas fa-times'}></i></div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
  close: PropTypes.func,

};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Modal,
  // Container as Modal,
  Component as ModalComponent, //for tests
};

