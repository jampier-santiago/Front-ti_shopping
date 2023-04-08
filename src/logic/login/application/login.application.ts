// Packages
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Endpoints
import useEndpointsLogin from "../infrastructure/login.endpoints";

// Redux
import { logIn } from "redux/slices/auth/thunk";

const useLoginApplication = () => {
  const dispatch = useDispatch();

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
  const onSubmit = async (data: any) => {
    // makeLogin({ email: data.emailUser, password: data.password })
    //   .then(() => {
    //     console.log("Login CORRECTO");
    //     navigate("/");
    //   })
    //   .catch(({ response }) => {
    //     console.error(response?.data?.msg);
    //   });

    await dispatch(
      logIn({ fullName: "", id: "1", role: "CLIENT", token: "" }) as any
    );

    navigate("/admin/estadisticas");
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
