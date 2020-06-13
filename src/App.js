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
import { fatchCartFromLocalStorage } from './redux/cartRedux';

class Component extends React.Component {

  componentDidMount() {
    const { fetchCourses, courses, fatchCartFromLocalStorage } = this.props;
    if (courses.length === 0) {
      fetchCourses();
    }
    fatchCartFromLocalStorage();
  }

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/course/:_id`} component={CoursePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/courses`} component={MyCoursesPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/panel/:_id`} component={CoursePanelPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={CartPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/summary`} component={SummaryPage} />
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
  courses: PropTypes.array,
  fetchCourses: PropTypes.func,
  fatchCartFromLocalStorage: PropTypes.func,
};

const mapStateToProps = state => ({
  courses: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
  fatchCartFromLocalStorage: () => dispatch(fatchCartFromLocalStorage()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as App,
  Container as App,
  Component as AppComponent, //for tests
};
