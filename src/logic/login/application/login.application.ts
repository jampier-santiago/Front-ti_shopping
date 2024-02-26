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
    setError,
  } = useForm();

  //states
  const [isLogin, setIsLogin] = useState(false);
  const [updateRoute, setUpdateRoute] = useState(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  //functions
  const onSubmit = async (data: any) => {
    endpoint()
      .post<AxiosResponse>({
        url: `/auth/login`,
        data: {
          email: data.emailUser,
          password: data.password,
        },
      })
      .then(async (result) => {
        const data = result as unknown as ResponseLogin;

        await dispatch(logIn(data) as any);

        navigate("/admin/estadisticas");
      })
      .catch((error) => console.log(error));
  };

  const onSubmitRegister = async (data: any) => {
    const {
      birthDate,
      email,
      valuePassword,
      userName,
      surname,
      password,
      phoneNumber,
      address,
    } = data;

    if (password !== valuePassword) {
      setError("password", { message: "Los campos no son iguales" });
      setError("valuePassword", {
        message: "Los campos no son iguales",
      });
      return;
    }

    const dataEndpoint = {
      name: userName.trim(),
      lastName: surname.trim(),
      phoneNumber,
      email,
      address,
      password,
      bornDate: birthDate,
    };

    endpoint()
      .post({ url: `/users`, data: dataEndpoint })
      .then(() => {
        endpoint()
          .post<AxiosResponse>({
            url: `/auth/login`,
            data: {
              email,
              password,
            },
          })
          .then(async (result) => {
            const data = result as unknown as ResponseLogin;

            await dispatch(logIn(data) as any);

            navigate("/admin/estadisticas");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        if (!error.response.data) {
          endpoint()
            .post<AxiosResponse>({
              url: `/auth/login`,
              data: {
                email,
                password,
              },
            })
            .then(async (result) => {
              const data = result as unknown as ResponseLogin;

              await dispatch(logIn(data) as any);

              navigate("/admin/estadisticas");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        console.log(error);
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
    onSubmitRegister,
    showToast,
    setShowToast,
  };
};
export default useLoginApplication;
