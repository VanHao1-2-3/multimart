import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "../Slices/cartSlices";
const store = configureStore({
   reducer:{
      cart: cartSlices
   }
})
export default store