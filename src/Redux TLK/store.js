import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Reducers/ProductSlice";
import FilteredSlice from "./Reducers/FilteredProduct";
export const store = configureStore({
  reducer: {
    Product: productsSlice,
    Filtered: FilteredSlice,
  },
});
