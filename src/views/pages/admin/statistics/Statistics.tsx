import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Statistics = () => {
  const { id } = useSelector((state: RootState) => state.auth);

  // console.log(id);

  return (
    <div>
      <h1>Estadisticas</h1>
    </div>
  );
};

export default Statistics;
