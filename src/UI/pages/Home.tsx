import useStyles from "../../styles";

// Controllers
import useComponents from "../components/index";

const Home = () => {
  // Components
  const { Nav } = useComponents();

  // Controllers

  // Styles
  const { useHomeStyles } = useStyles();
  const { StyledMain, StylesTitle } = useHomeStyles();

  return (
    <StyledMain>
      <Nav></Nav>
      <section></section>

      <article></article>
    </StyledMain>
  );
};

export default Home;
