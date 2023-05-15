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
    StyledDiv,
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
        <StyleLeftSection>
          <StyleTittle>info del producto </StyleTittle>
        </StyleLeftSection>
        <StyleRigthtSection
          style={{ backgroundImage: `url('${bgRight}')` }}
        ></StyleRigthtSection>
      </StyleMain>

      {JSON.stringify(stores)}

      <h2>{stores?.business_description}</h2>
      <h2>{stores?.name_store}</h2>
      {/* <StyleSectionShop>
        {stores &&
          stores.map((shop) => (
            <Link to={`/shop/${shop?.Id_stores}`}>
              <Tilt tiltReverse>
                <StyleSquareShop
                  style={{ backgroundImage: `url('${shop?.logo}')` }}
                ></StyleSquareShop>
              </Tilt>
            </Link>
          ))}
      </StyleSectionShop> */}
    </main>
  );
};

export default ShopDetail;
