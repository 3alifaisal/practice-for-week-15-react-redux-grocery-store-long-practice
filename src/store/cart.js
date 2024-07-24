const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";
const INCREASE_ITEM_COUNT = "cart/increaseItemCount";
const DECREASE_ITEM_COUNT = "cart/decreaseItemCount";
const EMPTY_CART = "cart/emptyCart";

export const emptyCartAction = () => {
  return {
    type: EMPTY_CART,
  };
};
export const increaseItemCountAction = (id) => {
  return {
    type: INCREASE_ITEM_COUNT,
    payload: id,
  };
};

export const decreaseItemCountAction = (id) => {
  return {
    type: DECREASE_ITEM_COUNT,
    payload: id,
  };
};
export const addToCartAction = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
};
export const removeFromCartAction = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const getItemWithDetails = (state) => {
  const produce = state.produce;
  const cart = state.cart;

  const cartItems = cart.order.map((id) => {
    console.log(cart.items);
    console.log(cart.order);
    return {
      ...cart.items[id],
      ...produce[id],
    };
  });
  console.log(cartItems, "blalallaallal");
  return cartItems;
};

const initialState = {
  items: {},
  order: [],
};
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newState = { ...state };
      const id = action.payload;
      if (newState.items[id]) {
        newState.items[id].count++;
      }
      const newItem = {
        id: id,
        count: 1,
      };
      newState.items[id] = newItem;
      newState.order.push(id);

      return newState;
    }
    case REMOVE_FROM_CART: {
      const newState = { ...state };
      const id = action.payload;
      delete newState.items[id];
      newState.order = newState.order.filter((orderId) => orderId !== id);
      return newState;
    }
    case INCREASE_ITEM_COUNT: {
      const newState = { ...state };
      const id = action.payload;
      newState.items[id].count++;
      return newState;
    }
    case DECREASE_ITEM_COUNT: {
      const newState = { ...state };
      const id = action.payload;
      newState.items[id].count--;
      return newState;
    }
    case EMPTY_CART: {
      const newState = {
        items: {},
        order: [],
      };
      return newState;
    }
    default:
      return state;
  }
}
