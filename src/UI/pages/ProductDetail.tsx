// Packages
import { FC, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";

// Components
import useViews from "..";

// Styles
import useStyles from "styles";

// Logic
import useProducDetailApplication from "logic/producDetail/application/productDetail.application";

// Assets
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import model from "assets/models/mac.gltf";

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
    StyledBody,
    StyledSectionImages,
  } = useProductDetail();

  const loaderModel = useLoader(GLTFLoader, model);

  return (
    <StyleMain>
      <StyledBody>
        <StyledSectionImages>
          <StyledContainerSlider>
            {views.map((element) => (
              <StyledViewSlider
                key={element}
                className="styled-view-slider"
                style={{ backgroundImage: `url("${product?.image}")` }}
              >
                <span>{element}</span>
                {/* <img src={p} alt="" /> */}
              </StyledViewSlider>
            ))}
          </StyledContainerSlider>

          {currentPositionSlider !== 0 && (
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
        </StyledSectionImages>

        <Suspense>
          <Canvas style={{ height: "600px", width: "600px", margin: "auto" }}>
            <color attach="background" args={["#F8F7F7"]} />
            <ambientLight />
            <spotLight
              position={[0, 70, 70]}
              color="#fff"
              intensity={4}
              angle={70}
            />

            <Suspense fallback={null}>
              <primitive
                scale={20}
                position={[25, -50, 0]}
                object={(loaderModel as any).scene}
              />
            </Suspense>
            <OrbitControls
              autoRotate
              minDistance={70}
              maxDistance={110}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </Suspense>

        <StyleArticle>
          <Styletitle>{product?.Name_product}</Styletitle>

          <StyleIcon>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </StyleIcon>

          <StyleText>{product?.Description_product}</StyleText>

          <StyleText>${product?.Price}</StyleText>

          <StyleButton>COMPRAR</StyleButton>
        </StyleArticle>
      </StyledBody>

      <section>
        <h2>Aquí va la descripción larga del producto (carateristicas)</h2>
      </section>
    </StyleMain>
  );
};

export default ProductDetail;
