import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MainLayout.module.scss';

import { PageNav } from '../PageNav/PageNav';
import { Footer } from '../Footer/Footer';

import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';

const Component = ({ className, children, updateLoginStatus }) => (
  <div className={clsx(className, styles.root)}>
    <PageNav />
    {/* select for tests */}
    <select onChange={(e) => updateLoginStatus(e.target.value)} className={styles.select}>
      <option value="login">Login</option>
      <option value="logout">Logout</option>
    </select>
    {children}
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  updateLoginStatus: PropTypes.func,

};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent, //for tests
};

