// Packages
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";

// Redux
import { logIn } from "redux/slices/auth/thunk";

// Endpoints
import endpoint from "logic/api/api.adapter";

const useUserApplication = () => {
  const dispatch = useDispatch();

  const {
    userName,
    address,
    email,
    num_telephone,
    CVC,
    N_credit_card,
    credit_card_expiration_date,
    token,
    id,
    role,
  } = useSelector((state: RootState) => state.auth);

  // States
  const [isEditingData, setIsEditingData] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [infoToast, setInfoToast] = useState<{
    msg: string;
    state: "success" | "error";
  }>({ msg: "", state: "error" });

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: userName,
      num_telephone,
      userEmail: email,
      address,
      CVC,
      N_credit_card,
      credit_card_expiration_date: credit_card_expiration_date
        .toString()
        .split("T")[0],
    },
  });

  // Functions
  const submit = (data: any) => {
    const formData = {
      firstName: data.userName.split(" ")[0] || "",
      secondName: data.userName.split(" ")[1] || "",
      surname: data.userName.split(" ")[2] || "",
      secondSurname: data.userName.split(" ")[3] || "",
      phoneNumber: data.num_telephone,
      email: data.email,
      address: data.address,
      N_credit_card: data.N_credit_card,
      credit_card_expiration_date: data.credit_card_expiration_date,
      CVC: data.CVC,
    };

    endpoint()
      .put({
        url: `/auth/update/${id}`,
        data: formData,
        headers: { "x-token": token },
      })
      .then(async () => {
        await dispatch(
          logIn({
            ...data,
            phoneNumber: data.num_telephone,
            email: data.email,
            address: data.address,
            N_credit_card: data.N_credit_card,
            credit_card_expiration_date: data.credit_card_expiration_date,
            CVC: data.CVC,
            token,
            role,
            id,
          }) as any
        );
        handleStateToast();
        setInfoToast({ state: "success", msg: "Datos actualizados con exito" });
      })
      .catch((error) => {
        handleStateToast();
        setInfoToast({
          state: "error",
          msg: error.response.data.error,
        });
        console.log(error);
      });
  };

  const handleStateForm = () => {
    setIsEditingData((data) => !data);
  };

  const handleStateToast = () => {
    setShowToast(!showToast);
  };

  return {
    register,
    handleSubmit,
    errors,
    submit,
    userName,
    isEditingData,
    handleStateForm,
    showToast,
    handleStateToast,
    infoToast,
  };
};

export default useUserApplication;
