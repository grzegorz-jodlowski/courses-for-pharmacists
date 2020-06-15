import Axios from 'axios';
import { api } from '../settings';
import { initialState } from './initialState';

// /* selectors */
export const getAll = ({ courses }) => courses.data;
export const getCurrentCourse = ({ courses }) => courses.currentCourse;
export const getLoadingState = ({ courses }) => courses.loading;

// /* action name creator */
const reducerName = 'courses';
const createActionName = name => `app/${reducerName}/${name}`;

// /* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_COURSE_SUCCESS = createActionName('FETCH_COURSE_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// /* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchCourseSuccess = payload => ({ payload, type: FETCH_COURSE_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

// /* thunk creators */
export const fetchCourses = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const state = getState();
    if (state.courses.data.length === 0 && state.courses.loading.active) {
      Axios
        .get(`${api.url}/${api.courses}`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchCourseDetails = id => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.courses}/${id}`)
      .then(res => {
        dispatch(fetchCourseSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};


/* reducer */
export default function reducer(statePart = initialState.courses, action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_COURSE_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        currentCourse: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}
