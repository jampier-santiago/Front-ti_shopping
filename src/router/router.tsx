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
  const { Home, Login, ShopView, ShopDetail, ProductDetail } = usePages();
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
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/register"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/shop"
        element={
          <MainLayout>
            <ShopView />
          </MainLayout>
        }
      />
      <Route
        path="/admin/*"
        element={<PrivateRoute element={<RouterAdmin />} />}
      />

      <Route path="/*" element={<Navigate to="/" />} />

      <Route
        path="/shop/:id"
        element={
          <MainLayout>
            <ShopDetail />
          </MainLayout>
        }
      />
      <Route
        path="/productos/:id"
        element={
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default useRouter;
