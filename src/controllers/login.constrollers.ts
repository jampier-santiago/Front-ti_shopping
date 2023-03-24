import { useNavigate } from "react-router-dom";

const useLoginControllers = () => {
  const navigate = useNavigate();
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Hola bb");
  };

  const redirectUrl = (url: string) => {
    navigate(url);
  };

  return { redirectUrl, onSubmit };
};
export default useLoginControllers;
