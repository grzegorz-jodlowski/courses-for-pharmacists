import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';

import { Button } from '../../common/Button/Button';
import { Title } from '../../common/Title/Title';
import { Face } from '../../common/Face/Face';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root, 'container')}>
    <Face />
    <Title >Ups! Nie znalazłem tej strony!</Title>
    <Button text={'Wróć do strony głównej'} />
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
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent, //for tests
};

