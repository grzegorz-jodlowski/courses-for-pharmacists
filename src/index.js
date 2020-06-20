import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { register, unregister } from './serviceWorker';
import './styles/normalize.scss';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//register - serwiceWorker is on, unregister -serviceWorker is off
unregister();
