// Styles
import useHomeStyles from "./home.styles";
import useLoginStyles from "./login.styles";
import useStatisticsStyles from "./admin/statistics.styles";
import useShopViewStyles from "./shopView.styles";
import useUserStyles from "./admin/user.styles";
import useShopDetailStyes from "./shopDetail.styles";
import useProductDetail from "./productDetail.styles";

const useStyles = () => {
  return {
    useHomeStyles,
    useLoginStyles,
    useShopViewStyles,
    useShopDetailStyes,
    useProductDetail,

    // Admin
    useStatisticsStyles,
    useUserStyles,
  };
};

export default useStyles;
