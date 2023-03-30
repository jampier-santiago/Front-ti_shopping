import { Routes, Route, Navigate } from "react-router-dom";

import useViews from "../views";

const useRouter = () => {
  const { usePages } = useViews();
  const { Home, Login } = usePages();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Login />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default useRouter;
