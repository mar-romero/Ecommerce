import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    logoutProduct: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
    removeProduct: (state, action) => {
      let indexRemoveProduct = state.products.findIndex(
        (productt) => productt._id === action.payload._id && (productt.price*productt.quantity) === (action.payload.price * action.payload.quantity)
      );
      state.products.splice(indexRemoveProduct,1)
      state.quantity -= 1;
      state.total = state.total - (action.payload.price * action.payload.quantity);
    },
  },
});

export const { addProduct, logoutProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
