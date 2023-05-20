import { lazy } from "react";

// Pages
const Statistics = lazy(() => import("./statistics"));
const User = lazy(() => import("./user"));
const Products = lazy(() => import("./products"));
const EditProduct = lazy(() => import("./EditProduct"));
const Users = lazy(() => import("./users"));
const Stores = lazy(() => import("./stores"));
const Store = lazy(() => import("./store"));

const usePagesAdmin = () => {
  return { Statistics, User, Products, EditProduct, Users, Stores, Store };
};

export default usePagesAdmin;
