import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import styles from './LoginPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Info } from '../../common/Info/Info';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/ExampleRedux';

const Component = ({ className, children, isLogged }) => {

  const responseGoogle = (response) => {
    console.log(response);
  };
  const logout = (response) => {
    console.log('Wylogowano');
  };

  const client = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  console.log(' : Component -> client', client);
  return (
    <main className={clsx(className, styles.root, 'container')}>
      {isLogged ?
        <Info variant={'success'} >Jesteś zalogowany</Info>
        :
        <div>
          <Title>Zaloguj się żeby uzyskać dostęp do swoich kursów</Title>
          {/* <a className={clsx(styles.loginBtn, styles.loginBtnGoogle)} href="http://localhost:8000/auth/google">
            Login with Google
          </a> */}
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          // isSignedIn={true}
          />

          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
          // isSignedIn={false}
          >
          </GoogleLogout>

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

