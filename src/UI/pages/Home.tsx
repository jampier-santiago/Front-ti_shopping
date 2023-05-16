import useStyles from "../../styles";

// Controllers
import useHomeApplication from "logic/home/application/home.application";

// Components
import useComponents from "../components/index";

//Assets
import imageHeader from "assets/img/boy-with-vr.png";

const Home = () => {
  // Components
  const { CardProduct } = useComponents();

  // Controllers
  const { categories, products } = useHomeApplication();

  // Styles
  const { useHomeStyles } = useStyles();
  const {
    StyledContainer,
    StyledHeader,
    StyledTitle,
    StyledImageHeader,
    StyledDescription,
    StyledContainerSectionProducts,
    StyledCategorias,
    StyledContainerCategories,
    StyledPillCategory,
    StyledGridProducts,
  } = useHomeStyles();

  return (
    <StyledContainer>
      {/* Header */}
      <StyledHeader>
        <StyledTitle>
          TI Shopping: el destino donde maximizas tus ventas a un costo
          reducido.
        </StyledTitle>

        <StyledDescription>
          Con TI Shopping, puedes alcanzar a un público más amplio al ofrecer
          productos de calidad a través de una tienda en línea disponible las 24
          horas del día, los 7 días de la semana.
        </StyledDescription>

        <StyledImageHeader src={imageHeader} alt="" />
      </StyledHeader>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#151616"
          fill-opacity="1"
          d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,272C672,277,768,267,864,245.3C960,224,1056,192,1152,197.3C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Products */}
      <StyledContainerSectionProducts id="productos">
        <StyledCategorias>
          <h3>Nuestras categorias</h3>

          <StyledContainerCategories>
            {categories.map((category) => (
              <StyledPillCategory key={category.Id_categories}>
                {category.name_categoria}
              </StyledPillCategory>
            ))}
          </StyledContainerCategories>
        </StyledCategorias>

        <StyledGridProducts>
          {products.map((product) => (
            <CardProduct
              name={product.Name_product}
              id={product.Id_product.toString()}
              image={product.image.split(",")[0]}
              key={product.Id_product.toString()}
              urlSee={`/productos/${product.Id_product.toString()}`}
              action={(id) => console.log(id)}
            />
          ))}
        </StyledGridProducts>
      </StyledContainerSectionProducts>
    </StyledContainer>
  );
};

export default Home;
