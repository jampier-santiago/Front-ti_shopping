// Packages
import { useDispatch } from "react-redux";
import { logOut } from "redux/slices/auth/thunk";

// Styles
import useStyles from "./navAdmin.styles";

// Components
import useComponents from "..";

// Logic
import useAdminLayout from "logic/admin/layout/application/layout.applications";

// Assets
import iconMenu from "assets/icons/menu.png";

const NavAdmin = () => {
  const dispatch = useDispatch();

  // Styles
  const {
    StyledContainer,
    StyledContainerAvatar,
    StylyedIcon,
    StyledBottomContainer,
    StyledContainerLinks,
    StyledLink,
    StyledLi,
    StyledIconMenu,
    StyledModal,
  } = useStyles();

  // Components
  const { Button } = useComponents();

  // Logic
  const { handleStateModal, userName, showModal } = useAdminLayout();

  return (
    <StyledContainer>
      <StyledModal className={showModal ? "show-menu" : "hidde-menu"}>
        <StyledContainerLinks>
          <StyledLi>
            <StyledLink to={"/"}>Estadisticas</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/"}>Mi negocio</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/"}>Mis productos</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/"}>Mi cuenta</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/"}>Usuarios</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={"/"}>Tiendas</StyledLink>
          </StyledLi>
        </StyledContainerLinks>
      </StyledModal>

      <StyledContainerAvatar>
        <StylyedIcon>
          {userName?.split(" ").length > 1
            ? `${userName?.split(" ")[0].charAt(0)}${userName
                ?.split(" ")[1]
                .charAt(0)}`
            : userName?.split(" ")[0].charAt(0)}
        </StylyedIcon>
      </StyledContainerAvatar>

      <StyledContainerLinks desktop>
        <StyledLi>
          <StyledLink to={"/"}>Estadisticas</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={"/"}>Mi negocio</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={"/"}>Mis productos</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={"/"}>Mi cuenta</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={"/"}>Usuarios</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={"/"}>Tiendas</StyledLink>
        </StyledLi>
      </StyledContainerLinks>

      <StyledBottomContainer>
        <Button
          text="Cerrar sesion"
          type="button"
          variant="secondary"
          onClick={() => dispatch(logOut() as any)}
        />
      </StyledBottomContainer>

      <StyledIconMenu onClick={handleStateModal}>
        <img src={iconMenu} alt="Icono de menu" />
      </StyledIconMenu>
    </StyledContainer>
  );
};

export default NavAdmin;
