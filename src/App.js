import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/Home/HomePage';
import { ContactPage } from './components/views/Contact/ContactPage';
import { PrivacyPage } from './components/views/Privacy/PrivacyPage';
import { TermsPage } from './components/views/Terms/TermsPage';
import { LoginPage } from './components/views/Login/LoginPage';
import { NotFoundPage } from './components/views/NotFound/NotFoundPage';

import { connect } from 'react-redux';
// import { getAll, fetchCourses } from './redux/coursesRedux';
// import { fetchCartFromLocalStorage } from './redux/cartRedux';

class Component extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/privacy`} component={PrivacyPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/terms`} component={TermsPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/logout`} component={HomePage} />
          <Route exact path={`${process.env.PUBLIC_URL}*`} component={NotFoundPage} />
        </Switch>
      </MainLayout>
    );
  }
}

Component.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as App,
  Component as AppComponent, //for tests
};
