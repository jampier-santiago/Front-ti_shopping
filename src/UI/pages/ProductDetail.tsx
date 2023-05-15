import useViews from "..";
import useStyles from "styles";
import { FC } from "react";
import useProducDetailApplication from "logic/producDetail/application/productDetail.application";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetail: FC = () => {
  //components
  const { useComponents } = useViews();
  const { Button, Input } = useComponents();
  const { currentPositionSlider, handleCurrentPositionSlider, views, product } =
    useProducDetailApplication();

  //styles
  const { useProductDetail } = useStyles();
  const {
    StyledContainerSlider,
    StyledViewSlider,
    StyleMain,
    StyleArticle,
    StyleIcon,
    StyleText,
    Styletitle,
    StyleParagraph,
    StyleButton,
    StyledButtonNext,
  } = useProductDetail();
  return (
    <main>
      <StyleMain>
        <article>
          <StyledContainerSlider>
            {views.map((element) => (
              <StyledViewSlider key={element} className="styled-view-slider">
                <span>{element}</span>
              </StyledViewSlider>
            ))}
          </StyledContainerSlider>
          {currentPositionSlider != 0 && (
            <StyledButtonNext
              onClick={() =>
                handleCurrentPositionSlider(currentPositionSlider - 1)
              }
            >
              Anterior
            </StyledButtonNext>
          )}

          {currentPositionSlider <= views.length - 1 && (
            <StyledButtonNext
              onClick={() =>
                handleCurrentPositionSlider(currentPositionSlider + 1)
              }
            >
              siguiente
            </StyledButtonNext>
          )}
        </article>

        <StyleArticle>
          <Styletitle>{product?.Name_product}</Styletitle>

          <StyleIcon>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </StyleIcon>

          <StyleParagraph>{product?.Description_product}</StyleParagraph>

          <StyleText>Tu producto llega en menos de 3 días </StyleText>

          <StyleText>Aquí va el precio</StyleText>

          <StyleButton>COMPRAR</StyleButton>
        </StyleArticle>
      </StyleMain>
      <section>
        <h2>Aquí va la descripción larga del producto (carateristicas)</h2>
      </section>
    </main>
  );
};

export default ProductDetail;
