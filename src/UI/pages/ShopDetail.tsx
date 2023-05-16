import useViews from "..";
import useStyles from "styles";

//ASSETS
import logo from "../../../assets/img/Logo_TI_Shopping.png";
import iconFacebook from "../../assets/icons/Logo-facebook.png";
import iconTwitter from "../../assets/icons/Logo-twitter.png";
import iconInstagram from "../../assets/icons/Logo-instagram.png";

//controller
import useShopDetailApplications from "logic/shopsDetail/application/shopsDetail.application";
import Products from "./admin/products";
import { store } from "redux/store";

const ShopDetail = () => {
  //constroller
  const { stores } = useShopDetailApplications();

  //components
  const { useComponents } = useViews();
  const { Button, Input } = useComponents();

  //styles
  const { useShopDetailStyes } = useStyles();
  const {
    StyleMain,
    StyleDecorationHero,
    StyleSquareShop,
    StyleSectionShop,
    StyleTittle,
    StyleSubTittle,
    StyleLeftSection,
    StyleRigthtSection,
    StyledIcon,
  } = useShopDetailStyes();

  return (
    <main>
      <StyleMain>
        <StyleLeftSection>
          <StyleTittle>{stores?.name_store}</StyleTittle>
          <StyleSubTittle>{stores?.business_description}</StyleSubTittle>
          <StyleSubTittle>{stores?.Email}</StyleSubTittle>

          <StyleSubTittle>{stores?.Num_telephone}</StyleSubTittle>
          <StyleSubTittle>{stores?.Page_web}</StyleSubTittle>
          <StyleSubTittle>{stores?.Instagram}</StyleSubTittle>
          <StyledIcon>
            <a target="_blank" href={stores?.Facebook}>
              <img src={iconFacebook} alt="Logo-Facebook" />
            </a>
            <a target="_blank" href={stores?.Instagram}>
              <img src={iconInstagram} alt="Logo-instagram" />
            </a>
          </StyledIcon>
        </StyleLeftSection>
        <StyleRigthtSection>
          <img src={stores?.logo} alt="Logo tienda" />
        </StyleRigthtSection>
      </StyleMain>

      {/* {JSON.stringify(stores)} */}
    </main>
  );
};

export default ShopDetail;