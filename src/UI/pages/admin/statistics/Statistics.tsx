// Packages
import { useSelector } from "react-redux";

// Styles
import useStyles from "styles";

// Components
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

// Redux
import { RootState } from "redux/store";

// Controlelrs
import useStaticsApplication from "logic/admin/statics/application/statics.application";

const Statistics = () => {
  // Styles
  const { useStatisticsStyles } = useStyles();
  const { StyledMain, StyledTitle, StyledSubtitle } = useStatisticsStyles();

  const { data } = useStaticsApplication();

  // Redux
  const { id } = useSelector((state: RootState) => state.auth);

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

  return (
    <StyledMain>
      <StyledTitle>Mis estadisticas</StyledTitle>

      <StyledSubtitle>
        Aqui podras encontrar mas informacion relacionada con las vistas de tus
        productos, y la interaccion de tus usuarios, con tu negocio
      </StyledSubtitle>

      <div style={{ maxWidth: "600px", margin: "auto" }}>
        <PolarArea data={data} title="Productos mas vendidos" />
      </div>
    </StyledMain>
  );
};

export default Statistics;
