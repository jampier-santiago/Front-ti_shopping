import { useState } from "react";

const useNavApplication = () => {
  //State
  const [showModal, setShowModal] = useState<boolean>(false);

  //function
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return {
    showModal,
    handleModal,
  };
};
export default useNavApplication;
