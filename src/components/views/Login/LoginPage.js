import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './LoginPage.module.scss';

import { Title } from '../../common/Title/Title';

import { connect } from 'react-redux';
// import { updateLoginStatus } from '../../../redux/loginRedux';
// import { fetchUser, clearUser } from '../../../redux/userRedux';

const Component = ({ className, children }) => (
  <main className={clsx(className, styles.root, 'container')}>
    <Title decoration={true} >Login</Title>
    {children}
  </main>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LoginPage,
  Component as LoginPageComponent, //for tests
};

