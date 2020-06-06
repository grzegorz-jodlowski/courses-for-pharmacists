import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { Course } from './components/views/Course/Course';
import { MyCourses } from './components/views/MyCourses/MyCourses';
import { Cart } from './components/views/Cart/Cart';
import { Contact } from './components/views/Contact/Contact';
import { Privacy } from './components/views/Privacy/Privacy';
import { Terms } from './components/views/Terms/Terms';
import { Login } from './components/views/Login/Login';
import { NotFound } from './components/views/NotFound/NotFound';


import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter >
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={`${process.env.PUBLIC_URL}/course/:_id`} component={Course} />
          <Route exact path={`${process.env.PUBLIC_URL}/courses`} component={MyCourses} />
          <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart} />
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
          <Route exact path={`${process.env.PUBLIC_URL}/privacy`} component={Privacy} />
          <Route exact path={`${process.env.PUBLIC_URL}/terms`} component={Terms} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}*`} component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
