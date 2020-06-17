import { initialState } from './initialState';

// selectors
export const getSearchString = ({ searchString }) => searchString;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE_SEARCH_STRING = createActionName('CHANGE_SEARCH_STRING');

// action creators
export const changeSearchString = payload => ({ payload: payload, type: CHANGE_SEARCH_STRING });

// reducer
export default function reducer(statePart = initialState.searchString, action = {}) {
  switch (action.type) {
    case CHANGE_SEARCH_STRING:
      return action.payload;
    default:
      return statePart;
  }
}

