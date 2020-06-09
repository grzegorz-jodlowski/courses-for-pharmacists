import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Logo.module.scss';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, action }) => (
  <Link to={`${process.env.PUBLIC_URL}/`} onClick={action}>
    <div className={clsx(className, styles.root)}>
      <img src="img/logo.png" alt="Logo Kursy dla Farmaceutów" className={styles.logo} />
    </div>
  </Link>
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
  Component as Logo,
  // Container as Logo,
  Component as LogoComponent, //for tests
};

