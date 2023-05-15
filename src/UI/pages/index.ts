import Home from "./Home";
import Login from "./Login";
import usePagesAdmin from "./admin";
import ShopView from "./ShopView";
import ShopDetail from "./ShopDetail";
import ProductDetail from "./ProductDetail";

const usePages = () => {
  return { Home, Login, usePagesAdmin, ShopView, ShopDetail, ProductDetail };
};

export default usePages;
