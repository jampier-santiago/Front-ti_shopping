import useStyles from "../../styles";

// Controllers
import useControllers from "../../controllers";

const Home = () => {
  const { useHomeControllers } = useControllers();
  const { sumarNumeros } = useHomeControllers();

  const { useHomeStyles } = useStyles();
  const { StyledMain, StylesTitle } = useHomeStyles();

  return (
    <StyledMain>
      <nav></nav>

      <StylesTitle>Hola</StylesTitle>

      <section></section>

      <article></article>

      <footer></footer>
    </StyledMain>
  );
};

export default Home;
