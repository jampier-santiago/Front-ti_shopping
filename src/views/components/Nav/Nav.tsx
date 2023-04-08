import useNavStyles from "./Nav.styles";

//ASSETS
import logo from "../../../assets/img/Logo_TI_Shopping.png";

const Nav = () => {
  const { Styledlogo, StyledLink, StyledCol, StyledCollis, StyledNav } =
    useNavStyles();

  return (
    <StyledNav>
      <Styledlogo src={logo} alt="logo_Ti_Shopping" />

      <StyledCol>
        <StyledCollis>
          <StyledLink href="#">Inicio</StyledLink>
        </StyledCollis>
        <StyledCollis>
          <StyledLink href="#">Categorías</StyledLink>
        </StyledCollis>
        <StyledCollis>
          <StyledLink href="#">Productos</StyledLink>
        </StyledCollis>
        <StyledCollis>
          <StyledLink href="#">Carrito de Compras</StyledLink>
        </StyledCollis>
      </StyledCol>
    </StyledNav>
  );
};

export default Nav;
