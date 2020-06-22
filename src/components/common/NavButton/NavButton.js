import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NavButton.module.scss';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Component = ({ className, text, path, action, cartVariant, cart }) =>
  <Link to={`${process.env.PUBLIC_URL}/${path}`} className={clsx(className, styles.root)} onClick={action}>
    {text}
    {(cartVariant && cart.length > 0) && <div className={styles.quantity}>{cart.length}</div>}
  </Link>;

Component.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  action: PropTypes.func,
  cartVariant: PropTypes.bool,
  cart: PropTypes.array,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as NavButton,
  Component as NavButtonComponent, //for tests
};

