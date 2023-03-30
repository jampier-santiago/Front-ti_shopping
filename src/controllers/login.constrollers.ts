import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const useLoginControllers = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);

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

  return { redirectUrl, onSubmit, register, handleSubmit, errors };
};
export default useLoginControllers;
