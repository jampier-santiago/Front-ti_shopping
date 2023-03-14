import React from "react";

import useControllers from "../controllers";

const Home = () => {
  const { useHome } = useControllers();
  const { name } = useHome();

  return <div>Hola</div>;
};

export default Home;
