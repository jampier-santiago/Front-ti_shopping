// Packages
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const useUserApplication = () => {
  const { fullName, role, address, email, phoneNumber } = useSelector(
    (state: RootState) => state.auth
  );

  // States
  const [isEditingData, setIsEditingData] = useState(false);

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
  };

  const handleStateForm = () => {
    setIsEditingData((data) => !data);
  };

  return {
    register,
    handleSubmit,
    errors,
    submit,
    fullName,
    isEditingData,
    handleStateForm,
  };
};

export default useUserApplication;
