
// /* selectors */
export const getOrder = (state) => state.order;


// /* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

// /* action types */
const UPDATE_ORDER = createActionName('UPDATE_ORDER');

// /* action creators */
export const updateOrder = payload => ({ payload, type: UPDATE_ORDER });


/* reducer */
export default function reducer(statePart = {}, action = {}) {
  switch (action.type) {
    case UPDATE_ORDER: {
      return {
        ...statePart,
      };
    }
    default:
      return statePart;
  }
}
