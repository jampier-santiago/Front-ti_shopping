// Styles
import useHomeStyles from "./home.styles";
import useLoginStyles from "./login.styles";
import useStatisticsStyles from "./admin/statistics.styles";
import useUserStyles from "./admin/user.styles";

const useStyles = () => {
  return {
    useHomeStyles,
    useLoginStyles,

    // Admin
    useStatisticsStyles,
    useUserStyles,
  };
};

export default useStyles;
