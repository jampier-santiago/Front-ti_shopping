// Styles
import useHomeStyles from "./home.styles";
import useLoginStyles from "./login.styles";
import useStatisticsStyles from "./admin/statistics.styles";

const useStyles = () => {
  return {
    useHomeStyles,
    useLoginStyles,

    // Admin
    useStatisticsStyles,
  };
};

export default useStyles;
