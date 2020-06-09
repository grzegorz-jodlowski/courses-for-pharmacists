import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Title.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, decoration }) => (
  <div>
    <h2 className={clsx(className, styles.root)}>
      {children}
    </h2>
    {decoration && <div className={styles.underscore}></div>}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  decoration: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Title,
  // Container as Title,
  Component as TitleComponent, //for tests
};

