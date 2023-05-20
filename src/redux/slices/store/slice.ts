import { createSlice } from "@reduxjs/toolkit";
import { ResponseProductDetail } from "../../../logic/producDetail/data/productDetail.models";

interface Product extends ResponseProductDetail {
  amount: number;
}

interface GroupStore {
  [x: string]: Array<Product>;
}

export const shoppingCartSlice = createSlice<
  {
    totalProducts: number;
    products: GroupStore;
  },
  {
    addNewProduct: (state: any, action: { type: string; payload: any }) => void;
    removeProduct: (state: any, action: { type: string; payload: any }) => void;
    resetShoppingCart: (
      state: any,
      action: { type: string; payload: any }
    ) => void;
  }
>({
  name: "shoppingCart",
  initialState: { totalProducts: 0, products: {} },
  reducers: {
    addNewProduct: (
      state: {
        totalProducts: number;
        products: GroupStore;
      },
      action
    ) => {
      state.totalProducts += 1;
      state.products = action.payload;
    },
    removeProduct: (state, action) => {
      state.totalProducts -= 1;
      state.products = action.payload;
    },
    resetShoppingCart: (state) => {
      state.products = {};
      state.totalProducts = 0;
    },
  },
});

export const { addNewProduct, removeProduct, resetShoppingCart } =
  shoppingCartSlice.actions;
