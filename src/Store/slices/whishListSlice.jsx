import { createSlice } from "@reduxjs/toolkit";

const whishListSlice = createSlice({
  name: "whishlist",
  initialState: [],
  reducers: {
    addToWhishList(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If item already exists, increase quantity by 1
        state = state.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If item does not exist, add it to the cart with quantity 1
        state.push({ ...newItem, quantity: 1 });
      }
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const itemToIncrease = state.find((item) => item.id === id);

      if (itemToIncrease) {
        state = state.map((item) =>
          item.id === itemToIncrease.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    },
    deleteFromWhish(state, action) {
      const { id } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
  },
});
// console.log(cartSlice.reducer(undefined, { type: "@@INIT" }));

export const { addToWhishList, deleteFromWhish, increaseQuantity } =
  whishListSlice.actions;
export default whishListSlice.reducer;
