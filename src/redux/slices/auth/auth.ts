// Packages
import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { ResponseLogin } from "logic/login/data/login.models";

export const authSlice = createSlice({
  name: "auth",
  initialState: localStorage.getItem("auth")
    ? (JSON.parse(localStorage.getItem("auth") || "") as ResponseLogin)
    : {
        userName: "",
        id: "",
        role: "CLIENT",
        token: "",
        email: "",
        address: "",
        num_telephone: "",
        creation_date: "",
        N_credit_card: "",
        CVC: "",
        credit_card_expiration_date: "",
      },
  reducers: {
    logIn: (state, action) => {
      state.userName = action.payload.userName;
      state.id = action.payload.id;
      state.role = action.payload.role;
      state.token = action.payload.token;
      state.address = action.payload.address;
      state.email = action.payload.email;
      state.num_telephone = action.payload.num_telephone;
      state.creation_date = action.payload.creation_date;
      state.CVC = action.payload.CVC;
      state.N_credit_card = action.payload.N_credit_card;
      state.credit_card_expiration_date =
        action.payload.credit_card_expiration_date;

      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.userName = "";
      state.id = "";
      state.role = "CLIENT";
      state.token = "";
      state.address = "";
      state.email = "";
      state.num_telephone = "";
      state.creation_date = "";
      state.CVC = "";
      state.N_credit_card = "";
      state.credit_card_expiration_date = "";

      localStorage.removeItem("auth");
    },
  },
});

export const { logOut, logIn } = authSlice.actions;
