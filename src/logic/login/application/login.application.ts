// Packages
import { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import withReactContent from "sweetalert2-react-content";

// Endpoints
import endpoint from "logic/api/api.adapter";

// Redux
import { logIn } from "redux/slices/auth/thunk";

// Interfaces
import { ResponseLogin } from "../data/login.models";

const useLoginApplication = () => {
  const MySwal = withReactContent(Swal);

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
        url: `/users/login`,
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
      .catch((error: any) => {
        console.log(error.response.data.message);

        if (
          error.response.data.message[0] ===
          "password must be longer than or equal to 8 characters"
        ) {
          MySwal.fire({
            title: "Contraseña incorrecta",
            icon: "warning",
            text: `La contraseña no cumple con el minimo de caracteres`,
            confirmButtonText: "Continuar",
            confirmButtonColor: "#426E86",
          });
        }

        if (error.response.data.message === "Credentials are not valid") {
          MySwal.fire({
            title: "Datos incorrectos",
            icon: "warning",
            text: `Los datos no coinciden con alguna cuenta`,
            confirmButtonText: "Continuar",
            confirmButtonColor: "#426E86",
          });
        }
      });
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
            url: `/users/login`,
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
