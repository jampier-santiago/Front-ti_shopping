import useNavStyles from "./Nav.styles";

//ASSETS
import logo from "../../../assets/img/Logo_TI_Shopping.png";
import icono from "../../../assets/Icons/carrito-de-compras.png";
const Nav = () => {
  const {
    Styledlogo,
    StyledLink,
    StyledCol,
    StyledCollis,
    StyledNav,
    StyledHeader,
    StyledActionHeader,
  } = useNavStyles();

  return (
    <StyledNav>
      <StyledHeader>
        <Styledlogo src={logo} alt="logo_Ti_Shopping" />
        <StyledActionHeader>
          <StyledLink href="/login">Sign In</StyledLink>
          <img src={icono} alt="Icono_de_Compra" />
        </StyledActionHeader>
      </StyledHeader>

      <hr />
      <StyledCol>
        <StyledCollis>
          <StyledLink href="#">Shop</StyledLink>
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
