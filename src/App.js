import React from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { CoursePage } from './components/views/CoursePage/CoursePage';
import { MyCourses } from './components/views/MyCourses/MyCourses';
import { Cart } from './components/views/Cart/Cart';
import { Contact } from './components/views/Contact/Contact';
import { Privacy } from './components/views/Privacy/Privacy';
import { Terms } from './components/views/Terms/Terms';
import { Login } from './components/views/Login/Login';
import { NotFound } from './components/views/NotFound/NotFound';
import { CoursePanel } from './components/views/CoursePanel/CoursePanel';
import { SummaryPage } from './components/views/SummaryPage/SummaryPage';

import { connect } from 'react-redux';
import { getAll, fetchCourses } from './redux/coursesRedux';

class Component extends React.Component {

  componentDidMount() {
    const { fetchCourses, courses } = this.props;
    if (courses.length === 0) {
      fetchCourses();
    }
  }

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/course/:_id`} component={CoursePage} />
          <Route exact path={`${process.env.PUBLIC_URL}/courses`} component={MyCourses} />
          <Route exact path={`${process.env.PUBLIC_URL}/panel/:_id`} component={CoursePanel} />
          <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
          <Route exact path={`${process.env.PUBLIC_URL}/summary`} component={SummaryPage} />
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
          <Route exact path={`${process.env.PUBLIC_URL}/privacy`} component={Privacy} />
          <Route exact path={`${process.env.PUBLIC_URL}/terms`} component={Terms} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/logout`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}*`} component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}

Component.propTypes = {
  courses: PropTypes.array,
  fetchCourses: PropTypes.func,
};

const mapStateToProps = state => ({
  courses: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(fetchCourses()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as App,
  Container as App,
  Component as AppComponent, //for tests
};
