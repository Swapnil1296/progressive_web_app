import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If item already exists, increase quantity by 1 and update the price
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // If item does not exist, add it to the cart with quantity 1 and set the initial total price
        state.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      }
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      const itemToIncrease = state.find((item) => item.id === id);

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        itemToIncrease.totalPrice =
          itemToIncrease.price * itemToIncrease.quantity;
      }
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      const itemToDecrease = state.find((item) => item.id === id);

      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        itemToDecrease.totalPrice =
          itemToDecrease.price * itemToDecrease.quantity;
      } else if (itemToDecrease && itemToDecrease.quantity === 1) {
        // Optionally remove item if quantity is 1 and it's being decreased
        const index = state.findIndex((item) => item.id === id);
        state.splice(index, 1);
      }
    },
    deleteFromCart(state, action) {
      const { id } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    removeAllItem(state, action) {
      state.length = 0;
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  removeAllItem,
} = cartSlice.actions;
export default cartSlice.reducer;
