import { Routes, Route } from "react-router-dom";

import useViews from "../views";

const useRouter = () => {
  const { Home } = useViews();

  return (
    <Routes>
      <Route path="/" element={<Home />} />\
    </Routes>
  );
};

export default useRouter;
