import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getUser = (state) => state.user;

/* action name creator */
const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_USER = createActionName('FETCH_USER');

/* action creators */
export const fetchUserRedux = payload => ({ payload, type: FETCH_USER });

// /* thunk creators */
export const fetchUser = () => {
  return (dispatch, getState) => {
    // dispatch(fetchStarted());
    // const state = getState();
    Axios
      .get(`${api.url}/${api.users}`)
      .then(res => {
        // dispatch(fetchSuccess(res.data));
        console.log(' : fetchUser -> res.data', res.data);
      })
      .catch(err => {
        // dispatch(fetchError(err.message || true));
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
    default:
      return statePart;
  }
}
