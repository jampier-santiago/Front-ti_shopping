// Packages
import { useSelector } from "react-redux";

// Styles
import useStyles from "styles";

// Redux
import { RootState } from "redux/store";

const Statistics = () => {
  // Styles
  const { useStatisticsStyles } = useStyles();
  const { StyledMain, StyledTitle } = useStatisticsStyles();

  // Redux
  const { id } = useSelector((state: RootState) => state.auth);

  return (
    <StyledMain>
      <StyledTitle>Mis estadisticas</StyledTitle>
    </StyledMain>
  );
};

export default Statistics;
