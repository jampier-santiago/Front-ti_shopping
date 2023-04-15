import useViews from "..";
import useStyles from "styles";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

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
  } = useShopDetailStyes();

  return (
    <main>
      <StyleMain>
        <StyleDecorationHero className="rotate-squeare"></StyleDecorationHero>

        <StyleTittle>AQUI LA VA IMAGEN PRINCIPAL DE LA TIENDA</StyleTittle>
      </StyleMain>
      {/* <svg
      id="wave"
      style="transform:rotate(180deg); transition: 0.3s"
      viewBox="0 0 1440 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(21, 22, 22, 1)" offset="0%"></stop>
          <stop stop-color="rgba(21, 22, 22, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style="transform:translate(0, 0px); opacity:1"
        fill="url(#sw-gradient-0)"
        d="M0,90L80,78.3C160,67,320,43,480,43.3C640,43,800,67,960,73.3C1120,80,1280,70,1440,68.3C1600,67,1760,73,1920,65C2080,57,2240,33,2400,35C2560,37,2720,63,2880,71.7C3040,80,3200,70,3360,70C3520,70,3680,80,3840,83.3C4000,87,4160,83,4320,81.7C4480,80,4640,80,4800,78.3C4960,77,5120,73,5280,61.7C5440,50,5600,30,5760,23.3C5920,17,6080,23,6240,30C6400,37,6560,43,6720,53.3C6880,63,7040,77,7200,75C7360,73,7520,57,7680,53.3C7840,50,8000,60,8160,56.7C8320,53,8480,37,8640,38.3C8800,40,8960,60,9120,66.7C9280,73,9440,67,9600,55C9760,43,9920,27,10080,18.3C10240,10,10400,10,10560,21.7C10720,33,10880,57,11040,66.7C11200,77,11360,73,11440,71.7L11520,70L11520,100L11440,100C11360,100,11200,100,11040,100C10880,100,10720,100,10560,100C10400,100,10240,100,10080,100C9920,100,9760,100,9600,100C9440,100,9280,100,9120,100C8960,100,8800,100,8640,100C8480,100,8320,100,8160,100C8000,100,7840,100,7680,100C7520,100,7360,100,7200,100C7040,100,6880,100,6720,100C6560,100,6400,100,6240,100C6080,100,5920,100,5760,100C5600,100,5440,100,5280,100C5120,100,4960,100,4800,100C4640,100,4480,100,4320,100C4160,100,4000,100,3840,100C3680,100,3520,100,3360,100C3200,100,3040,100,2880,100C2720,100,2560,100,2400,100C2240,100,2080,100,1920,100C1760,100,1600,100,1440,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
      ></path>
    </svg> */}

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
