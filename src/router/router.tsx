import { Routes, Route } from "react-router-dom";

import useViews from "../views";

const useRouter = () => {
  const { usePages } = useViews();
  const { Home, Login } = usePages();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default useRouter;
