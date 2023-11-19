import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    AddtoCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists, increase its quantity and total
        existingItem.quantity += 1;
        existingItem.total = existingItem.MRP * existingItem.quantity;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1 and calculate the total
        state.cart.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.MRP,
        });
      }
    },
    RemoveItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    EmptyCart: (state, action) => {
      state.cart = state.cart.slice(0, state.cart.length);
    },
    IncreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.total = item.MRP * item.quantity;
      }
    },
    DecreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.MRP * item.quantity;
      }
    },
  },
});

export default Cart.reducer;
export const { AddtoCart, RemoveItem, EmptyCart,IncreaseQuantity,DecreaseQuantity} = Cart.actions;