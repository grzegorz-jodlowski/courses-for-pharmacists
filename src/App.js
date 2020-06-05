import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';


import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter >
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };
