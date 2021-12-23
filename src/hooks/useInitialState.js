import { useState } from "react";
const initialState = {
  cart: [],
  toggleOrders: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
    });
  };

  const showToggleOrders = (payload) => {
    setState({
      ...state,
      toggleOrders: payload,
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    showToggleOrders,
  };
};

export default useInitialState;
