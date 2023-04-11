// packages
import { Routes, Route, Navigate } from "react-router-dom";

// Router
import RouterAdmin from "./RouterAdmin";

// Components
import useViews from "../UI";
import PrivateRoute from "./PrivateRoute";
import useLayouts from "UI/layouts";

const useRouter = () => {
  const { usePages } = useViews();
  const { Home, Login } = usePages();
  const { MainLayout } = useLayouts();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
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
