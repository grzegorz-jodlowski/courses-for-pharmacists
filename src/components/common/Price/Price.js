import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Price.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, price }) => (
  <p className={clsx(className, styles.root)}>
    {`Do zapłaty: ${price},00 PLN`}
  </p>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  price: PropTypes.number,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Price,
  // Container as Price,
  Component as PriceComponent, //for tests
};

