import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "./cryptoSlice";
import darkReducer from "./darkSlice";

export const store = configureStore({
  reducer: { crypto: cryptoReducer, dark: darkReducer },
});
