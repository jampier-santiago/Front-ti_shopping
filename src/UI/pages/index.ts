import { lazy } from "react";

import usePagesAdmin from "./admin";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const ShopView = lazy(() => import("./ShopView"));
const ShopDetail = lazy(() => import("./ShopDetail"));
const ProductDetail = lazy(() => import("./ProductDetail"));
const ViewPay = lazy(() => import("./ViewPay"));

const usePages = () => {
  return {
    Home,
    Login,
    usePagesAdmin,
    ShopView,
    ShopDetail,
    ProductDetail,
    ViewPay,
  };
};

export default usePages;
