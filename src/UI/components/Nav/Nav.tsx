import useNavStyles from "./Nav.styles";
import useNavApplication from "logic/components/Nav/application/nav.application";

// Components
import { Link } from "react-router-dom";
import Modal from "../modal";

//ASSETS
import logo from "assets/img/Logo_TI_Shopping.png";
import icono from "assets/icons/carrito-de-compras.png";
import iconMenu from "assets/icons/menu-dark.svg";
import iconClose from "assets/icons/close.svg";

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
    StyledModalShoppingCart,
  } = useNavStyles();

  //Logic
  const { handleModal, showModal, handleModalShopping, showModalShopping } =
    useNavApplication();

  return (
    <>
      {showModalShopping && (
        <Modal onClose={handleModalShopping}>
          <StyledModalShoppingCart>
            <h3>Carrito de compras</h3>
          </StyledModalShoppingCart>
        </Modal>
      )}
      <StyledNav>
        <StyledModal className={showModal ? "show-menu" : "hidde-menu"}>
          <StyledCol>
            <StyledCollis>
              <StyledLink onClick={handleModal} to="/shop">
                Shop
              </StyledLink>
            </StyledCollis>
            <StyledCollis>
              <StyledLink onClick={handleModal} to="/#productos">
                Productos
              </StyledLink>
            </StyledCollis>
            <StyledCollis>
              <StyledLink onClick={handleModal} to="/admin">
                Admin
              </StyledLink>
            </StyledCollis>
            <StyledCollis>
              <StyledLink onClick={handleModal} to="/login">
                Login
              </StyledLink>
            </StyledCollis>
            <StyledCollis>
              <StyledLink onClick={handleModal} to="#">
                Carrito de Compras
              </StyledLink>
            </StyledCollis>
          </StyledCol>
        </StyledModal>

        <StyledHeader>
          <Link to={"/"}>
            <Styledlogo src={logo} alt="logo_Ti_Shopping" />
          </Link>

          <StyledActionHeader>
            <StyledLink to="/shop">Shop</StyledLink>

            <StyledLink to="/#productos">Productos</StyledLink>

            <StyledLink to="/admin">Admin</StyledLink>

            <StyledLink to="/login">Login</StyledLink>

            <StyledCar
              src={icono}
              alt="Icono_de_Compra"
              onClick={handleModalShopping}
            />
          </StyledActionHeader>

          <StyledIconMenu
            src={showModal ? iconClose : iconMenu}
            alt="Icono de Menu"
            onClick={handleModal}
          />
        </StyledHeader>
      </StyledNav>
    </>
  );
};

export default Nav;
