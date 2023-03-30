import useStyles from "../../styles";

// Controllers
import useControllers from "../../controllers";
import useComponents from "../components/index";

const Home = () => {
  // Components
  const { Button } = useComponents();

  // Controllers
  const { useHomeControllers } = useControllers();
  const { sumarNumeros } = useHomeControllers();

  // Styles
  const { useHomeStyles } = useStyles();
  const { StyledMain, StylesTitle } = useHomeStyles();

  return (
    <StyledMain>
  

      <StylesTitle>TI_Shopping</StylesTitle>

      <section></section>

      <article></article>

    </StyledMain>
  );
};

export default Home;
