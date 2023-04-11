import Home from "./Home";
import Login from "./Login";
import usePagesAdmin from "./admin";
import ShopView from "./ShopView";
import Shop from "./Shop";

const usePages = () => {
  return { Home, Login, usePagesAdmin, ShopView, Shop };
};

export default usePages;
