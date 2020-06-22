import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/Home/HomePage';
import { CoursePage } from './components/views/Course/CoursePage';
import { MyCoursesPage } from './components/views/MyCourses/MyCoursesPage';
import { CartPage } from './components/views/Cart/CartPage';
import { ContactPage } from './components/views/Contact/ContactPage';
import { PrivacyPage } from './components/views/Privacy/PrivacyPage';
import { TermsPage } from './components/views/Terms/TermsPage';
import { LoginPage } from './components/views/Login/LoginPage';
import { NotFoundPage } from './components/views/NotFound/NotFoundPage';
import { CoursePanelPage } from './components/views/CoursePanel/CoursePanelPage';
import { SummaryPage } from './components/views/Summary/SummaryPage';

import { connect } from 'react-redux';
import { getAll, fetchCourses } from './redux/coursesRedux';
import { fetchCartFromLocalStorage } from './redux/cartRedux';

class Component extends React.Component {

  componentDidMount() {
    const { fetchCourses, courses, fetchCartFromLocalStorage } = this.props;

    if (!courses.length) {
      fetchCourses();
    }
    fetchCartFromLocalStorage();
  }

  render() {
    const publicUrl = process.env.PUBLIC_URL;

    return (
      <MainLayout>
        <Switch>
          <Route exact path={`${publicUrl}/`} component={HomePage} />
          <Route exact path={`${publicUrl}/course/:_id`} component={CoursePage} />
          <Route exact path={`${publicUrl}/courses`} component={MyCoursesPage} />
          <Route exact path={`${publicUrl}/panel/:_id`} component={CoursePanelPage} />
          <Route exact path={`${publicUrl}/cart`} component={CartPage} />
          <Route exact path={`${publicUrl}/summary`} component={SummaryPage} />
          <Route exact path={`${publicUrl}/contact`} component={ContactPage} />
          <Route exact path={`${publicUrl}/privacy`} component={PrivacyPage} />
          <Route exact path={`${publicUrl}/terms`} component={TermsPage} />
          <Route exact path={`${publicUrl}/login`} component={LoginPage} />
          <Route exact path={`${publicUrl}/logout`} component={HomePage} />
          <Route exact path={`${publicUrl}`} component={NotFoundPage} />
        </Switch>
      </MainLayout>
    );
  }
}

Component.propTypes = {
  courses: PropTypes.array,
  fetchCourses: PropTypes.func,
  fetchCartFromLocalStorage: PropTypes.func,
};

const mapStateToProps = state => ({
  courses: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
  fetchCartFromLocalStorage: () => dispatch(fetchCartFromLocalStorage()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as App,
  Component as AppComponent, //for tests
};
