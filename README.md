<p align="center">
<a href="https://online-pharmacy-site.herokuapp.com/"><img src="public/logo.jpg" title="courses-for-pharmacist" alt="snippet of courses for pharmacist website."></a>
</p>



# <p align="center">💊 Courses for Pharmacist website</p>
<p align="center">Project for mastering React, Express and MongoDB</p>

</br>

## Table of Contents

- [What's this project about?](#ab)
- [Technologies used](#tech)
- [What I learned?](#what)
- [Interesting code snippet](#inter)
- [Installation and quick start](#install)
- [Website (on Heroku)](#si)

</br>

## <a name="ab"></a>What's this project about?

This is a project of an application offering online courses for pharmacists. On the website you can buy access to the course, subscribe to the newsletter or save your cart to your user account. Login has been implemented by logging with your google account. After purchase, all information is saved in the database. The basket for a given user is available after logging in on all devices. Courses filtering is possible thanks to implementing real time search bar. In addition, you can send an email to the website owner via the contact form. An important functionality is saving the courses added to the cart in the localStorage, thanks to which it is available even after refreshing the page. The application has been adapted to PWA standards, which means that it can be added to the smartphone's start screen and partly used offline.

</br>

## <a name="tech"></a>Technologies used
- HTML
- CSS
- SCSS
- JavaScript
- React
- React Router
- Redux
- Axios
- Thunk
- Express
- MongoDB
- MongoDB Atlas
- Mongoose
- Nodemailer
- GIT

</br>

## <a name="what"></a>What I learned?

- create a login system using a google account in the React application (npm package [React Google Login](https://www.npmjs.com/package/react-google-login)),
- adapt the application to the requirements of PWA (Progressive Web App),
- publish the application using the Firebase service,
- save temporary data (e.g. shopping cart) in the backend using a user session,
- use the browser's memory to store application data (Cookies, localStorage, sessionStorage),
- perform website audits in browser devtools,
- use environment variables on the frontend side of the application,
- create search bar with real-time search,
- send automatic emails via the contact form using nodemailer,
- yagni principle ([You aren't gonna need it](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)).



</br>

## <a name="inter"></a>Interesting code snippet (for me of course 😉)
- login using google (react client):

```js
...

import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class Component extends React.Component {

...

loginSuccess = (response) => {
  const { updateLoginStatus, fetchUser } = this.props;

  updateLoginStatus('login');
  fetchUser(response.profileObj.email);
  };

loginError = () => {
  const { clearUser } = this.props;

  this.setState({ error: true });
  clearUser();
};

logout = () => {
  const { updateLoginStatus, clearUser } = this.props;

  updateLoginStatus('logout');
  clearUser();
};

render() {

...

  <GoogleLogout
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    render={({ onClick, disabled }) => (
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx(styles.loginBtn, styles.loginBtnGoogle)}>Kliknij żeby wylogować
      </button>
    )}
    buttonText="Logout"
    onLogoutSuccess={logout}
  >
  </GoogleLogout>

...

  <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    render={({ onClick, disabled }) => (
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx(styles.loginBtn, styles.loginBtnGoogle)}>Zaloguj się z Google
      </button>
    )}
    buttonText="Login"
    onSuccess={loginSuccess}
    onFailure={loginError}
    cookiePolicy={'single_host_origin'}
  />

...

}
```

</br>

## <a name="install"></a>Installation and quick start

- use the package manager [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/) to install dependencies:

```bash
npm install // yarn install

or

npm i // yarn
```
- run server with nodemon (after nodemon installation) and run watch mode to constantly refreshing react client:

```bash
npm start

or

yarn start
```


<br/>


## <a name="si"></a>Website (on Heroku)
[Courses for Pharmacist](https://online-pharmacy-site.herokuapp.com/)
- if the page loads slowly, wait a moment, the server is waking up because it is hosted on a free platform Heroku.

</br>
</br>

  *final individual project at the end of the 9-month [Web Developer Plus](https://kodilla.com/pl/bootcamp/webdeveloper/?type=wdp&editionId=309) course organized by [Kodilla](https://drive.google.com/file/d/1AZGDMtjhsHbrtXhRSIlRKKc3RCxQk6YY/view?usp=sharing)


