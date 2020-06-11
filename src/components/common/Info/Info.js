import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Info.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, variant }) => {

  switch (variant) {
    case 'success':
      return <div className={clsx(className, styles.root, styles.success)}>
        {children}
      </div>;
    case 'warning':
      return <div className={clsx(className, styles.root, styles.warning)}>
        {children}
      </div>;
    case 'error':
      return <div className={clsx(className, styles.root, styles.error)}>
        {children}
      </div>;
    default:
      return <div className={clsx(className, styles.root)}>
        {children}
      </div>;
  }
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

// const mapStateToProps = state => ({
//   concerts: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Info,
  // Container as Info,
  Component as InfoComponent, //for tests
};

