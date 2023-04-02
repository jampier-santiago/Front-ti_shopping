// Packages
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

// Endpoints
import useEndpointsLogin from "../infrastructure/login.endpoints";

const useLoginApplication = () => {
  // Endpoints
  const { makeLogin } = useEndpointsLogin();

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
    makeLogin({ email: data.emailUser, password: data.password })
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
