// Packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const useAdminLayout = () => {
  const data = useSelector((state: RootState) => state.auth);

  // States
  const [userName, setUserName] = useState<string>("");
  const [role, setRole] = useState<"SELLER" | "CLIENT" | "ADMIN">("CLIENT");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleStateModal = () => {
    setShowModal((lastState) => !lastState);
  };

  useEffect(() => {
    if (data) {
      setRole(data.role as any);
      setUserName(data.fullName);
    }
  }, [data]);

  return { showModal, userName, role, handleStateModal };
};

export default useAdminLayout;
