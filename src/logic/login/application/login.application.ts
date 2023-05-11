// Packages
import { AxiosResponse } from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Endpoints
import endpoint from "logic/api/api.adapter";

// Redux
import { logIn } from "redux/slices/auth/thunk";

// Interfaces
import { ResponseLogin } from "../data/login.models";

const useLoginApplication = () => {
  const dispatch = useDispatch();

  //Router
  const navigate = useNavigate();
  const location = useLocation();

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //states
  const [isLogin, setIsLogin] = useState(false);
  const [updateRoute, setUpdateRoute] = useState(false);
  //functions
  const onSubmit = async (data: any) => {
    endpoint()
      .post<AxiosResponse>(`${process.env.REACT_APP_ENDPOINT_URL}/auth/login`, {
        email: data.emailUser,
        password: data.password,
      })
      .then(async (result) => {
        const data = result as unknown as ResponseLogin;

        await dispatch(logIn(data) as any);

        navigate("/admin/estadisticas");
      })
      .catch((error) => console.log(error));
  };

  const redirectUrl = (url: string) => {
    navigate(url);
  };

  //efects
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setIsLogin(path === "login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateRoute]);

  return {
    redirectUrl,
    onSubmit,
    register,
    handleSubmit,
    errors,
    isLogin,
    setUpdateRoute,
  };
};
export default useLoginApplication;
