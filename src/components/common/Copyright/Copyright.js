import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Copyright.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <span className={clsx(className, styles.root)}>
    {'Copyright © '}
    <a href="https://kursydlafarmaceutow.pl" className={styles.link}>
      Kursy dla Farmaceutów
    </a>{' '}
    {new Date().getFullYear()}
    {'. '}
  </span>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Copyright,
  // Container as Copyright,
  Component as CopyrightComponent, //for tests
};

