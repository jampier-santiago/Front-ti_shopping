import { logIn as logInUser, logOut as logOutUser } from "./auth";

import { ResponseLogin } from "../../../logic/login/data/login.models";

export const logIn = (user: ResponseLogin) => {
  return async (dispatch: any) => {
    dispatch(
      logInUser({
        userName: user.userName,
        id: user.id,
        role: user.role,
        token: user.token,
        email: user.email,
        address: user.address,
        num_telephone: user.num_telephone,
        creation_date: user.creation_date,
        N_credit_card: user.N_credit_card,
        CVC: user.CVC,
        credit_card_expiration_date: user.credit_card_expiration_date,
      })
    );
  };
};

export const logOut = () => {
  return async (dispatch: any) => {
    dispatch(logOutUser());
  };
};
