import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './LoginPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Info } from '../../common/Info/Info';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, isLogged }) => {
  return (
    <main className={clsx(className, styles.root, 'container')}>
      {isLogged ?
        <Info variant={'success'} >Jesteś zalogowany</Info>
        :
        <div>
          <Title>Zaloguj się żeby uzyskać dostęp do swoich kursów</Title>
          <a className={clsx(styles.loginBtn, styles.loginBtnGoogle)} href="http://localhost:8000/auth/google">
            Login with Google
          </a>
        </div>
      }
    </main>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as LoginPage,
  Container as LoginPage,
  Component as LoginPageComponent, //for tests
};

