import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import styles from './LoginPage.module.scss';

import { Title } from '../../common/Title/Title';
import { Info } from '../../common/Info/Info';

import { connect } from 'react-redux';
import { updateLoginStatus } from '../../../redux/loginRedux';
import { fetchUser, clearUser } from '../../../redux/userRedux';

class Component extends React.Component {
  state = {
    error: null,
  }

  loginSuccess = (response) => {
    const { updateLoginStatus, fetchUser } = this.props;

    updateLoginStatus('login');
    fetchUser(response.profileObj.email);
  };
  loginError = (response) => {
    const { clearUser } = this.props;

    this.setState({ error: true });
    clearUser();
  };
  logout = (response) => {
    const { updateLoginStatus, clearUser } = this.props;

    updateLoginStatus('logout');
    clearUser();
  };
  render() {
    const { loginSuccess, loginError, logout } = this;
    const { className, isLogged } = this.props;
    const { error } = this.state;

    return (
      <main className={clsx(className, 'container')}>
        {isLogged ?
          <>
            <Info variant='success'>Jesteś zalogowany</Info>
            <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={({ onClick, disabled }) =>
                <button
                  onClick={onClick}
                  disabled={disabled}
                  className={clsx(styles.loginBtn, styles.loginBtnGoogle)}
                >
                  Kliknij żeby wylogować
                </button>}
              buttonText="Logout"
              onLogoutSuccess={logout}
            >
            </GoogleLogout>
          </>
          :
          <>
            <Title>Zaloguj się żeby uzyskać dostęp do swoich kursów</Title>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={({ onClick, disabled }) =>
                <button
                  onClick={onClick}
                  disabled={disabled}
                  className={clsx(styles.loginBtn, styles.loginBtnGoogle)}
                >
                  Zaloguj się z Google
                </button>}
              buttonText="Login"
              onSuccess={loginSuccess}
              onFailure={loginError}
              cookiePolicy={'single_host_origin'}
            />
            {error && <Info variant='error'>Nie udało się zalogować</Info>}
          </>}
      </main>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  isLogged: PropTypes.bool,
  updateLoginStatus: PropTypes.func,
  fetchUser: PropTypes.func,
  clearUser: PropTypes.func,
};

const mapStateToProps = state => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = dispatch => ({
  updateLoginStatus: log => dispatch(updateLoginStatus(log)),
  fetchUser: email => dispatch(fetchUser(email)),
  clearUser: () => dispatch(clearUser()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LoginPage,
  Component as LoginPageComponent, //for tests
};

