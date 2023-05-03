// Packages
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const useUserApplication = () => {
  const { fullName, address, email, phoneNumber } = useSelector(
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
      userName: fullName,
      phoneNumber,
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
    fullName,
    isEditingData,
    handleStateForm,
    showToast,
    handleStateToast,
  };
};

export default useUserApplication;
