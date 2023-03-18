import { configureStore } from "@reduxjs/toolkit";

import { shoppingCartSlice } from "./slice";

export const store = configureStore({
  reducer: { shoppingCart: shoppingCartSlice.reducer },
});
