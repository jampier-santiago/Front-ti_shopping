// Packages
import { Route, Routes, Navigate } from "react-router-dom";

// Layouts
import useLayouts from "UI/layouts";

// Pages
import useViews from "../UI";

const RouterAdmin = () => {
  // Layouts
  const { AdminLayout } = useLayouts();

  // Pages
  const { usePages } = useViews();
  const { usePagesAdmin } = usePages();
  const { Statistics, User } = usePagesAdmin();

  return (
    <Routes>
      <Route
        path="/estadisticas"
        element={
          <AdminLayout>
            <Statistics />
          </AdminLayout>
        }
      />
      <Route
        path="/productos"
        element={
          <AdminLayout>
            <Statistics />
          </AdminLayout>
        }
      />
      <Route
        path="/mi-cuenta"
        element={
          <AdminLayout>
            <User />
          </AdminLayout>
        }
      />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RouterAdmin;
