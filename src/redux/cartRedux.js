
// /* selectors */
export const getCart = (state) => state.cart;


// /* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

// /* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const UPDATE_CART = createActionName('UPDATE_CART');
const UPDATE_CART_ITEM_QUANTITY = createActionName('UPDATE_CART_ITEM_QUANTITY');
const UPDATE_CART_ITEM_INFO = createActionName('UPDATE_CART_ITEM_INFO');


// /* action creators */
export const addToCartRedux = payload => ({ payload, type: ADD_TO_CART });
export const removeFromCartRedux = payload => ({ payload, type: REMOVE_FROM_CART });
export const clearCartRedux = payload => ({ payload, type: CLEAR_CART });
export const updateCart = payload => ({ payload, type: UPDATE_CART });
export const updateCartItemQuantityRedux = payload => ({ payload, type: UPDATE_CART_ITEM_QUANTITY });
export const updateCartItemInfoRedux = payload => ({ payload, type: UPDATE_CART_ITEM_INFO });

// /* thunk creators */


export const fatchCartFromLocalStorage = () => {
  return (dispatch, getState) => {
    dispatch(updateCart(JSON.parse(localStorage.getItem('cart'))));
  };
};

export const addToCart = (cartItem) => {
  return (dispatch, getState) => {
    dispatch(addToCartRedux(cartItem));
    const { cart } = getState();
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};

export const removeFromCart = (cartId) => {
  return (dispatch, getState) => {
    dispatch(removeFromCartRedux(cartId));
    const { cart } = getState();
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};
export const clearCart = () => {
  return (dispatch, getState) => {
    dispatch(clearCartRedux());
    const { cart } = getState();
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};
export const updateCartItemQuantity = (obj) => {
  return (dispatch, getState) => {
    dispatch(updateCartItemQuantityRedux(obj));
    const { cart } = getState();
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};
export const updateCartItemInfo = (obj) => {
  return (dispatch, getState) => {
    dispatch(updateCartItemInfoRedux(obj));
    const { cart } = getState();
    localStorage.setItem('cart', JSON.stringify(cart));
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_CART: {
      return action.payload;
    }
    case ADD_TO_CART: {
      return [
        ...statePart,
        action.payload,
      ];
    }
    case REMOVE_FROM_CART: {
      return statePart.filter(({ courseId }) => courseId !== action.payload);
    }
    case CLEAR_CART: {
      return [];
    }
    case UPDATE_CART_ITEM_QUANTITY: {
      return statePart.map(cartItem => {
        if (cartItem.courseId === action.payload.id && action.payload.quantity > 0) {
          return {
            ...cartItem,
            quantity: action.payload.quantity,
          };
        }
        return cartItem;
      });
    }
    case UPDATE_CART_ITEM_INFO: {
      return statePart.map(cartItem => {
        if (cartItem.courseId === action.payload.id) {
          return {
            ...cartItem,
            additionalInfo: action.payload.additionalInfo,
          };
        }
        return cartItem;
      });
    }
    default:
      return statePart;
  }
}
