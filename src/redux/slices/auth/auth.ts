import { createSlice } from "@reduxjs/toolkit";

interface Person {
  fullName: string;
  id: string | number;
  role: "SELLER" | "CLIENT" | "ADMIN";
  token: string;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("auth")
    ? (JSON.parse(localStorage.getItem("auth") || "") as Person)
    : { fullName: "", id: "", role: "CLIENT", token: "" },
  reducers: {
    logIn: (state, action) => {
      state.fullName = action.payload.fullName;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.token = action.payload.token;

      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.fullName = "";
      state.id = "";
      state.role = "CLIENT";
      state.token = "";

      localStorage.removeItem("auth");
    },
  },
});

export const { logOut, logIn } = authSlice.actions;
