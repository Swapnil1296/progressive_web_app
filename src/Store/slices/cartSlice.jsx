import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {},
    deleteFromCart(state, action) {},
  },
});
export default cartSlice.reducer;
