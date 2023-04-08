import Home from "./Home";
import Login from "./Login";
import usePagesAdmin from "./admin";

const usePages = () => {
  return { Home, Login, usePagesAdmin };
};

export default usePages;
