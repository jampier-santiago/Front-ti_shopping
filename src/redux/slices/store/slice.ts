import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: { totalProducts: 0, products: [] },
  reducers: {
    addNewProduct: (state, action) => {
      state.totalProducts += 1;
      (state.products as any[]).push(action.payload);
    },
    removeProduct: (state, action) => {},
    resetShoppingCart: (state) => {
      state.products = [];
      state.totalProducts = 0;
    },
  },
});

export const { addNewProduct, removeProduct, resetShoppingCart } =
  shoppingCartSlice.actions;
