import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import styles from './LoginPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Info } from '../../common/Info/Info';

import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';
import { fetchUser } from '../../../redux/userRedux';

class Component extends React.Component {
  state = {
    error: null,
  }

  loginSuccess = (response) => {
    const { updateLoginStatus, fetchUser } = this.props;

    console.log(response);
    console.log(response.profileObj.email);
    console.log('Zalogowano');
    updateLoginStatus('login');
    fetchUser(response.profileObj.email);
  };
  loginError = (response) => {
    console.log(response);
    console.log('Nie udało się zalogować');
    this.setState({ error: true });
  };
  logout = (response) => {
    const { updateLoginStatus } = this.props;

    console.log('Wylogowano');
    updateLoginStatus('logout');
  };
  render() {
    const { loginSuccess, loginError, logout } = this;
    const { className, isLogged } = this.props;
    const { error } = this.state;

    return (
      <main className={clsx(className, styles.root, 'container')}>
        {isLogged ?
          <div>
            <Info variant={'success'} >Jesteś zalogowany</Info>
            <GoogleLogout
              // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              clientId='980498933049-e369765i28cv4aff5slma8qeaec2ru7e.apps.googleusercontent.com'
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={clsx(styles.loginBtn, styles.loginBtnGoogle)}>Kliknij żeby wylogować</button>
              )}
              buttonText="Logout"
              onLogoutSuccess={logout}
            >
            </GoogleLogout>
          </div>
          :
          <div>
            <Title>Zaloguj się żeby uzyskać dostęp do swoich kursów</Title>
            <GoogleLogin
              // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              clientId='980498933049-e369765i28cv4aff5slma8qeaec2ru7e.apps.googleusercontent.com'
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={clsx(styles.loginBtn, styles.loginBtnGoogle)}>Zaloguj się z Google</button>
              )}
              buttonText="Login"
              onSuccess={loginSuccess}
              onFailure={loginError}
              cookiePolicy={'single_host_origin'}
            // isSignedIn={true}
            />
            {error && <Info variant={'error'}>Nie udało się zalogować</Info>}
          </div>
        }
      </main>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  updateLoginStatus: PropTypes.func,
  fetchUser: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
  fetchUser: email => dispatch(fetchUser(email)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as LoginPage,
  Container as LoginPage,
  Component as LoginPageComponent, //for tests
};

