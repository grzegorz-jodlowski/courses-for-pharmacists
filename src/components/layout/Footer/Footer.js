import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';

import { Copyright } from '../../common/Copyright/Copyright';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children }) => (
  <footer className={clsx(className, styles.root)}>
    <p>
      <Copyright />
      {'Korzystając ze strony wyrażasz zgodę na używanie cookies oraz akceptujesz '}
      <Link to={`${process.env.PUBLIC_URL}/terms`} className={styles.link}>
        {'regulamin'}
      </Link>
      {', '}
      <Link to={`${process.env.PUBLIC_URL}/privacy`} className={styles.link}>
        {'politykę prywatności i politykę cookies'}
      </Link>
      {'.'}
    </p>
  </footer>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent, //for tests
};

