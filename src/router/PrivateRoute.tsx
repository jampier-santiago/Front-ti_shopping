// Packages
import { FC } from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface Props {
  element: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ element }: Props) => {
  const { id } = useSelector((state: RootState) => state.auth);

  return id ? <>{element}</> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
