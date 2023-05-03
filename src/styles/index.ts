// Styles
import useHomeStyles from "./home.styles";
import useLoginStyles from "./login.styles";
import useStatisticsStyles from "./admin/statistics.styles";
import useShopViewStyles from "./shopView.styles";
import useUserStyles from "./admin/user.styles";
import useProductsAStyles from "./admin/products.styles";

const useStyles = () => {
  return {
    useHomeStyles,
    useLoginStyles,
    useShopViewStyles,

    // Admin
    useStatisticsStyles,
    useUserStyles,
    useProductsdminStyles: useProductsAStyles,
  };
};

export default useStyles;
