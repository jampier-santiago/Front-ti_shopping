import useStyles from "../../styles";

// Controllers
import useComponents from "../components/index";

// //Assets
// //import backImgPC from "../../../src/assets/img/Imagen-Computador.png";
// import backImg from "../../../src/assets/img/pngwing.com.png";
// import iconBolsa from "../../../src/assets/icons/bolsas-de-compra.png";
// import iconMoneda from "../../../src/assets/icons/monedas-de-un-dolar.png";
// import iconMapa from "../../../src/assets/icons/mapa-icon.png";
// import iconCarro from "../../../src/assets/icons/logistico-icon.png";
// //import iconWindows from "../../../src/assets/icons/Logo-Windows.png";//

const Home = () => {
  // Components
  const { Button } = useComponents();

  // Styles
  const { useHomeStyles } = useStyles();
  const {
    StyledMain,
    StylesTitle,
    StylesInfoContent,
    StyledInfoContentDiv,
    StyledTitleH1,
    StyledImgInfo,
    StyledTitleSpan,
    StyledinfoH2,
    StyledCardDiv,
    StyledCardContenDiv,
    StyledFeatureDiv,
    StyledBotton,
    StyledFeatureCardDiv,
    StyledFeatureP,
    StyledTitleH2,
    StyledLineBr,
  } = useHomeStyles();

  return (
    <StyledMain>
      <StylesInfoContent>
        <StyledInfoContentDiv></StyledInfoContentDiv>
        <StylesTitle>
          <StyledTitleH1>
            best online store and more sales,{" "}
            <StyledTitleSpan>start with TI-Shopping</StyledTitleSpan>{" "}
          </StyledTitleH1>
          <StyledinfoH2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugit
            commodi non necessitatibus qui at facere fugiat perferendis soluta
            facilis! Et nihil, esse reiciendis est eius quaerat error eveniet
            fuga.
          </StyledinfoH2>
          <p>chupelogonorreahpsarnozo</p>
        </StylesTitle>
        <div>
          <StyledImgInfo src="" alt="" />
        </div>
      </StylesInfoContent>

      <StyledCardContenDiv>
        <StyledCardDiv>
          <img src="" alt="" />
          <h3>Variedad de Producto</h3>
          <p>
            TI_Shopping puedes acceder desde cualquier lugar y comprar lo que
            mas te guste
          </p>
        </StyledCardDiv>
        <StyledCardDiv>
          <img src="" alt="" />
          <h3>Paga Facil</h3>
          <p>Multiples metodo de pago que te facilitaran la compra</p>
        </StyledCardDiv>
        <StyledCardDiv>
          <img src="" alt="" />
          <h3>Tiendas Fisicas</h3>
          <p>Puedes ir a la tienda fisica del vendedor</p>
        </StyledCardDiv>

        <StyledCardDiv>
          <img src="" alt="" />
          <h3>Envio</h3>
          <p>TI_Shopping lleva tu producto a la puerta de tu casa</p>
        </StyledCardDiv>
      </StyledCardContenDiv>

      <StyledTitleH2>Main Features</StyledTitleH2>

      <StyledFeatureDiv>
        <StyledFeatureCardDiv>
          <div>
            <h2>easy managment</h2>
            <StyledFeatureP>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis error doloribus tempora? Magni blanditiis magnam earum
              voluptates? Tempore, asperiores, molestias delectus esse autem
              odio eaque alias dolore dolorem excepturi magnam.
            </StyledFeatureP>
          </div>
          <img src="" alt="" />
        </StyledFeatureCardDiv>

        <StyledFeatureCardDiv>
          <img src="" alt="" />
          <div>
            <h2>Fast Action</h2>
            <StyledFeatureP>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis error doloribus tempora? Magni blanditiis magnam earum
              voluptates? Tempore, asperiores, molestias delectus esse autem
              odio eaque alias dolore dolorem excepturi magnam.
            </StyledFeatureP>
          </div>
        </StyledFeatureCardDiv>

        <StyledFeatureCardDiv>
          <div>
            <h2>High Security</h2>
            <StyledFeatureP>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis error doloribus tempora? Magni blanditiis magnam earum
              voluptates? Tempore, asperiores, molestias delectus esse autem
              odio eaque alias dolore dolorem excepturi magnam.
            </StyledFeatureP>
          </div>
          <img src="" alt="" />
        </StyledFeatureCardDiv>
      </StyledFeatureDiv>

      <div>
        <StyledTitleH1>Download</StyledTitleH1>
        <StyledBotton>
          <Button text="Windows" type="submit" />
          <Button text="Mac" type="submit" />
          <Button text="Android" type="submit" />
        </StyledBotton>
      </div>

      <div>
        <StyledFeatureCardDiv>
          <div>
            <h2>
              Por qué el propietario de una pequeña empresa les gusta TI
              Shopping
            </h2>
            <StyledFeatureP>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis error doloribus tempora? Magni blanditiis magnam earum
              voluptates? Tempore, asperiores, molestias delectus esse autem
              odio eaque alias dolore dolorem excepturi magnam.
            </StyledFeatureP>
          </div>
        </StyledFeatureCardDiv>
      </div>
    </StyledMain>
  );
};

export default Home;
