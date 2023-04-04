// Packages
import { Route, Routes, Navigate } from "react-router-dom";

// Pages
import useViews from "../views";

const RouterAdmin = () => {
  const { usePages } = useViews();
  const { usePagesAdmin, Login } = usePages();
  const { Statistics } = usePagesAdmin();

  // Selector
  const data = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth") || "")
    : null;

  return (
    <Routes>
      <Route path="/estadisticas" element={<Statistics />} />
      <Route path="/productos" element={<Statistics />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouterAdmin;
