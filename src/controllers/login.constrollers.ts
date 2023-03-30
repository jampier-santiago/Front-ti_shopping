import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";

const useLoginControllers = () => {
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
  const onSubmit = (data: any) => {
    const params = { email: data.emailUser, password: data.password };
    axios
      .get(`${process.env.REACT_APP_ENDPOINT_URL}/api/auth/login`, {
        params,
      })
      .then(() => {
        console.log("Login CORRECTO");
        navigate("/");
      })
      .catch(({ response }) => {
        console.error(response?.data?.msg);
      });
  };

  const redirectUrl = (url: string) => {
    navigate(url);
  };

  //efects
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setIsLogin(path === "login");
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
export default useLoginControllers;
