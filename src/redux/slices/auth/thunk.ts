import { logIn as logInUser, logOut as logOutUser } from "./auth";

interface Person {
  fullName: string;
  id: string | number;
  role: "SELLER" | "CLIENT" | "ADMIN";
  token: string;
}

export const logIn = (user: Person) => {
  return async (dispatch: any) => {
    dispatch(
      logInUser({
        fullName: "AAAAA",
        id: "1",
        role: "ADMIN",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxIiwiaWF0IjoxNjgwNDAzNzIxLCJleHAiOjE2ODA0MjE3MjF9.T6ucOW7BNv2y34W5WegMewzI0wkGWQVZZKluBtDBehc",
      })
    );
  };
};

export const logOut = () => {
  return async (dispatch: any) => {
    dispatch(logOutUser());
  };
};
