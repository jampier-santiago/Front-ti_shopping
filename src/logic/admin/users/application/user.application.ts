// Packages
import { AxiosResponse } from "axios";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

// Endpoints
import endpoint from "logic/api/api.adapter";

// Models
interface Person {
  CVC: string;
  Id_people: number;
  N_credit_card: number | string;
  address: string;
  birthdate: string;
  creation_date: string | Date;
  credit_card_expiration_date: string | Date;
  email: string;
  f_lastname: string;
  f_name: string;
  num_telephone: string;
  rol: string;
  s_lastname?: string;
  s_name?: string;
  state: 1 | 0;
}

const useUsersApplication = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  // States
  const [users, setUsers] = useState<Array<Person>>([]);

  const getAllPeople = useCallback(() => {
    endpoint()
      .get<AxiosResponse>(`${process.env.REACT_APP_ENDPOINT_URL}/auth/users`, {
        "x-token": token,
      })
      .then((result) => setUsers(result as any))
      .catch((error) => console.log(error));
  }, [token]);

  useEffect(() => {
    getAllPeople();
  }, [getAllPeople]);

  return { users };
};

export default useUsersApplication;
