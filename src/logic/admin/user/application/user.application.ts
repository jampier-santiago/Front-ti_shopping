// Packages
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const useUserApplication = () => {
  const { userName, address, email, num_telephone } = useSelector(
    (state: RootState) => state.auth
  );

  // States
  const [isEditingData, setIsEditingData] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

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
    },
  });

  // Functions
  const submit = (data: any) => {
    console.log(data);
    handleStateToast();
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
  };
};

export default useUserApplication;
