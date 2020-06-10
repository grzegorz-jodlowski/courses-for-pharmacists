import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './QuantityInput.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, value, action, text }) => (
  <label htmlFor="quantity" className={clsx(className, styles.root)}>
    {text}
    <input name="quantity" id="quantity" required className={styles.input} type="number" value={value} onChange={action} />
  </label>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
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
  Component as QuantityInput,
  // Container as QuantityInput,
  Component as QuantityInputComponent, //for tests
};

