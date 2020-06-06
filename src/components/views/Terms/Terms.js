import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Terms.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root, 'container')}>
    <h2>Terms</h2>
    {children}
  </main>
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
  Component as Terms,
  // Container as Terms,
  Component as TermsComponent, //for tests
};

