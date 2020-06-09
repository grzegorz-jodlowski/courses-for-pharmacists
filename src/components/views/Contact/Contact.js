import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Contact.module.scss';

import { Title } from '../../common/Title/Title';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root, 'container')}>
    <Title decoration={true} >Kontakt</Title>
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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent, //for tests
};

