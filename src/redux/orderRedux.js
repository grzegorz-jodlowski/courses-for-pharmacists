import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getOrder = (state) => state.order;


/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_PRODUCTS_FROM_CART = createActionName('FETCH_PRODUCTS_FROM_CART');
const POST_START = createActionName('POST_START');
const POST_SUCCESS = createActionName('POST_SUCCESS');
const POST_ERROR = createActionName('POST_ERROR');

/* action creators */
export const fetchProductsFromCart = payload => ({ payload, type: FETCH_PRODUCTS_FROM_CART });
export const postStarted = payload => ({ payload, type: POST_START });
export const postSuccess = payload => ({ payload, type: POST_SUCCESS });
export const postError = payload => ({ payload, type: POST_ERROR });

/* thunk creators */
export const postOrder = (order) => {
  return (dispatch, getState) => {
    dispatch(postStarted());
    console.log('postStarted');
    console.log(' : postOrder -> order', order);

    Axios
      .post(`${api.url}/${api.orders}`, order)
      .then(res => {
        dispatch(postSuccess(res.data));
        console.log(' : postOrder -> res.data', res.data);
      })
      .catch(err => {
        dispatch(postError(err.message || true));
        console.log(' : postOrder -> err.message', err.message);
      });
  };
};


/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case FETCH_PRODUCTS_FROM_CART: {
      return {
        ...statePart,
        status: 'draft',
        products: action.payload,
      };
    }
    case POST_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
          success: false,
        },
      };
    }
    case POST_SUCCESS: {
      return {
        lastOrder: action.payload._id,
        status: 'draft',
        contact: {
          name: '',
          email: '',
          privacy: null,
          terms: null,
        },
        products: [],
        loading: {
          active: false,
          error: false,
          success: true,
        },
      };
    }
    case POST_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
          success: false,
        },
      };
    }

    default:
      return statePart;
  }
}
