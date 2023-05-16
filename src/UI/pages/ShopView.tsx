// Styles
import useStyles from "styles";

// Components
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

//controller
import useShopsApplications from "logic/shops/application/shops.application";

const ShopView = () => {
  //constroller
  const { stores } = useShopsApplications();

  //styles
  const { useShopViewStyles } = useStyles();
  const {
    StyleMain,
    StyleDecorationHero,
    StyleSquareShop,
    StyleSectionShop,
    StyleTittle,
    StyleSubTittle,
  } = useShopViewStyles();

  return (
    <main>
      <StyleMain>
        <StyleDecorationHero className="rotate-squeare"></StyleDecorationHero>

        <StyleTittle>Nuestros aliados</StyleTittle>
        <StyleSubTittle>
          Explora las marcas que más te cautiven y sumérgete en el deleite y
          satisfacción que brindan sus productos. Nos enorgullece verte feliz y
          satisfecho con tu elección.
        </StyleSubTittle>
      </StyleMain>

      <StyleSectionShop>
        {stores &&
          stores.map((shop) => (
            <Link to={`/shop/${shop?.Id_stores}`} key={shop?.Id_stores}>
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

export default ShopView;
