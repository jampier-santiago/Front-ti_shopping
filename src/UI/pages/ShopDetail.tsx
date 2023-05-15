import useViews from "..";
import useStyles from "styles";

//assets
import bgRight from "assets/img/login.jpg";

//controller
import useShopDetailApplications from "logic/shopsDetail/application/shopsDetail.application";

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
  } = useShopDetailStyes();

  return (
    <main>
      <StyleMain>
        <StyleRigthtSection
          style={{ backgroundImage: `url('${bgRight}')` }}
        ></StyleRigthtSection>
        <StyleLeftSection>
          <StyleTittle>{stores?.name_store}</StyleTittle>
          <StyleSubTittle>{stores?.business_description}</StyleSubTittle>
          <StyleSubTittle>{stores?.Email}</StyleSubTittle>
          <StyleSubTittle>{stores?.Address}</StyleSubTittle>
          <StyleSubTittle>{stores?.Facebook}</StyleSubTittle>
          <StyleSubTittle>{stores?.Instagram}</StyleSubTittle>
          <StyleSubTittle>{stores?.Num_telephone}</StyleSubTittle>
          <StyleSubTittle>{stores?.Page_web}</StyleSubTittle>
        </StyleLeftSection>
      </StyleMain>

      {/* {JSON.stringify(stores)} */}
    </main>
  );
};

export default ShopDetail;
