import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './RemoveButton.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, action }) => (
  <button className={clsx(className, styles.root)} onClick={action}><i className={clsx(styles.icon, 'fas fa-times')}></i></button>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  action: PropTypes.func,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as RemoveButton,
  // Container as RemoveButton,
  Component as RemoveButtonComponent, //for tests
};

