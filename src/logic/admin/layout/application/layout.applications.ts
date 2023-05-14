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

  const links = [
    { path: "/admin/estadisticas", restriction: false, text: "Estadisticas" },
    { path: "/admin", restriction: false, text: "Mi negocio" },
    { path: "/admin/productos", restriction: false, text: "Mis productos" },
    { path: "/admin/mi-cuenta", restriction: false, text: "Mi cuenta" },
    { path: "/admin/usuarios", restriction: true, text: "Usuarios" },
    { path: "/admin/tiendas", restriction: true, text: "Tiendas" },
  ];

  const handleStateModal = () => {
    setShowModal((lastState) => !lastState);
  };

  useEffect(() => {
    if (data) {
      setRole(data.role as any);
      setUserName(data.userName);
    }
  }, [data]);

  return { showModal, userName, role, handleStateModal, links };
};

export default useAdminLayout;
