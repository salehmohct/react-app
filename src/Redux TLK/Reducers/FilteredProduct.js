import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "FilteredSlice/fetchData",
  async (variable) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${variable}`
    );
    const data = await response.json();
    return data;
  }
);

export const FilteredSlice = createSlice({
  initialState: [],
  name: "FilteredSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchData.pending, (state) => {
      //   return (state.status = "loading");
      // })
      .addCase(fetchData.fulfilled, (state, action) => {
        // state.status = "succeeded";
        return (state = action.payload);
      });
    // .addCase(fetchData.rejected, (state, action) => {
    //   // state.status = "failed";
    //   return (state.error = action.error.message);
    // })
  },
});

export default FilteredSlice.reducer;
