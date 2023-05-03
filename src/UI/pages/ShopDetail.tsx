import useViews from "..";
import useStyles from "styles";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
//assets
import bgRight from "assets/img/login.jpg";

//controller
import useShopDetailApplications from "logic/shopsDetail/application/shops.application";

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

      <StyleSectionShop>
        {stores &&
          stores.map((shop) => (
            <Link to={`/shop/${shop?.id}`}>
              <Tilt tiltReverse>
                <StyleSquareShop
                  style={{ backgroundImage: `url('${shop?.logo}')` }}
                ></StyleSquareShop>
              </Tilt>
            </Link>
          ))}
      </StyleSectionShop>
    </main>
  );
};

export default ShopDetail;
