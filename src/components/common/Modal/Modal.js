import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Modal.module.scss';

import { Title } from '../../common/Title/Title';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, text }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.modal}>
      {text}
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
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

