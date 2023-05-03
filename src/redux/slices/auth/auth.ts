// Packages
import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { ResponsetLogin } from "logic/login/data/login.models";

export const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("auth")
    ? (JSON.parse(localStorage.getItem("auth") || "") as ResponsetLogin)
    : {
        fullName: "",
        id: "",
        role: "CLIENT",
        token: "",
        email: "",
        address: "",
        phoneNumber: "",
        dateOfMakeAccount: "",
      },
  reducers: {
    logIn: (state, action) => {
      state.fullName = action.payload.fullName;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.address = action.payload.address;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.dateOfMakeAccount = action.payload.dateOfMakeAccount;

      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.fullName = "";
      state.id = "";
      state.role = "CLIENT";
      state.token = "";
      state.address = "";
      state.email = "";
      state.phoneNumber = "";
      state.dateOfMakeAccount = "";

      localStorage.removeItem("auth");
    },
  },
});

export const { logOut, logIn } = authSlice.actions;
