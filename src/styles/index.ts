// Styles
import useHomeStyles from "./home.styles";
import useLoginStyles from "./login.styles";
import useStatisticsStyles from "./admin/statistics.styles";
import useShopViewStyles from "./shopView.styles";

const useStyles = () => {
  return {
    useHomeStyles,
    useLoginStyles,
    useShopViewStyles,

    // Admin
    useStatisticsStyles,
  };
};

export default useStyles;
