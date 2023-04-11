import useNavStyles from "./Nav.styles";
import useNavApplication from "logic/components/Nav/application/nav.application";

//ASSETS
import logo from "../../../assets/img/Logo_TI_Shopping.png";
import icono from "../../../assets/icons/carrito-de-compras.png";
import iconMenu from "assets/icons/menu.png";

const Nav = () => {
  const {
    Styledlogo,
    StyledLink,
    StyledCol,
    StyledCollis,
    StyledNav,
    StyledHeader,
    StyledActionHeader,
    StyledModal,
    StyledCar,
    StyledIconMenu,
  } = useNavStyles();

  //Logic
  const { handleModal, showModal } = useNavApplication();

  return (
    <StyledNav>
      <StyledModal className={showModal ? "show-menu" : "hidde-menu"}>
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
      </StyledModal>

      <StyledHeader>
        <Styledlogo src={logo} alt="logo_Ti_Shopping" />
        <StyledActionHeader>
          <StyledLink href="/login">Sign In</StyledLink>
          <StyledCar src={icono} alt="Icono_de_Compra" />
          <StyledIconMenu
            src={iconMenu}
            alt="Icono de Menu"
            onClick={handleModal}
          />
        </StyledActionHeader>
      </StyledHeader>

      <hr />
      <StyledCol>
        <StyledCollis>
          <StyledLink hidden href="#">
            Shop
          </StyledLink>
        </StyledCollis>
        <StyledCollis>
          <StyledLink hidden href="#">
            Categorías
          </StyledLink>
        </StyledCollis>
        <StyledCollis>
          <StyledLink hidden href="#">
            Productos
          </StyledLink>
        </StyledCollis>
        <StyledCollis>
          <StyledLink hidden href="#">
            Carrito de Compras
          </StyledLink>
        </StyledCollis>
      </StyledCol>
    </StyledNav>
  );
};

export default Nav;
