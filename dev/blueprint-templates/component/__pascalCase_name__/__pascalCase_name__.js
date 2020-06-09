import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './{{pascalCase name}}.module.scss';

import { Title } from '../../common/Title/Title';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Title decoration={false}>{{ pascalCase name }}</Title>
    {children}
  </div>
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
  Component as {{ pascalCase name }},
  // Container as {{pascalCase name}},
  Component as {{ pascalCase name }}Component, //for tests
};

