
// /* selectors */
export const getOrder = (state) => state.order;


// /* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// /* action types */
const ADD_PRODUCTS = createActionName('ADD_PRODUCTS');

//TODO: const FETCH_START = createActionName('FETCH_START');
// TODO: const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
// TODO: const FETCH_ERROR = createActionName('FETCH_ERROR');

// /* action creators */
export const addProducts = payload => ({ payload, type: ADD_PRODUCTS });


/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return {
        ...statePart,
        products: action.payload,
      };
    }
    default:
      return statePart;
  }
}
