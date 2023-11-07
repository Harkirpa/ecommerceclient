import { configureStore } from "@reduxjs/toolkit";
import Cart from "../Redux/Cart";

export default configureStore({
  reducer: {
    Cart: Cart,
  },
});