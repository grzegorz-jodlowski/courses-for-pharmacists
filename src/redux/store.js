import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import coursesReducer from './coursesRedux';
import loginReducer from './loginRedux';
import cartReducer from './cartRedux';
import orderReducer from './orderRedux';
import userReducer from './userRedux';
import searchReducer from './searchRedux';
import { initialState } from './initialState';

// define reducers
const reducers = {
  courses: coursesReducer,
  isLogged: loginReducer,
  cart: cartReducer,
  order: orderReducer,
  user: userReducer,
  searchString: searchReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export { store };
