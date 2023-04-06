// packages
import { Routes, Route, Navigate } from "react-router-dom";

// Router
import RouterAdmin from "./RouterAdmin";

// Components
import useViews from "../UI";
import PrivateRoute from "./PrivateRoute";

const useRouter = () => {
  const { usePages } = useViews();
  const { Home, Login } = usePages();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />
      <Route
        path="/admin/*"
        element={<PrivateRoute element={<RouterAdmin />} />}
      />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default useRouter;
