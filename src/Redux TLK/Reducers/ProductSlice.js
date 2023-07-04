import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);
export const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {
    DeleteItem: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export const { DeleteItem } = productsSlice.actions;
export default productsSlice.reducer;
