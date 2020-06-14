import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getUser = (state) => state.user;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_USER = createActionName('FETCH_USER');
const CLEAR_USER = createActionName('CLEAR_USER');

/* action creators */
export const fetchUserRedux = payload => ({ payload, type: FETCH_USER });
export const clearUser = payload => ({ payload, type: CLEAR_USER });

// /* thunk creators */
export const fetchUser = id => {
  return (dispatch, getState) => {
    Axios
      .get(`${api.url}/${api.users}/${id}`)
      .then(res => {
        dispatch(fetchUserRedux({
          id: res.data.email,
          courses: res.data.courses,
          cart: res.data.cart,
        }));
      })
      .catch(err => {
        console.log(' : fetchUser -> err.message', err.message);
      });
  };
};

/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case FETCH_USER: {
      return action.payload;
    }
    case CLEAR_USER: {
      return {};
    }
    default:
      return statePart;
  }
}
