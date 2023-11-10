import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    AddtoCart: (state, action) => {
      state.cart.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    EmptyCart: (state, action) => {
      state.cart = state.cart.slice(0, state.cart.length);
    },
  },
});

export default Cart.reducer;
export const { AddtoCart, RemoveItem, EmptyCart} = Cart.actions;