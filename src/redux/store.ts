// Packages
import { configureStore } from "@reduxjs/toolkit";

// Slices
import { shoppingCartSlice } from "./slices/store/slice";
import { authSlice } from "./slices/auth/auth";

export const store = configureStore({
  reducer: { shoppingCart: shoppingCartSlice.reducer, auth: authSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
