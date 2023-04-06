// Packages
import { useDispatch } from "react-redux";
import { logOut } from "redux/slices/auth/thunk";

// Styles
import useStyles from "./navAdmin.styles";

// Components
import useComponents from "..";

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
  } = useStyles();

  // Components
  const { Button } = useComponents();

  return (
    <StyledContainer>
      <StyledContainerAvatar>
        <StylyedIcon>JA</StylyedIcon>
      </StyledContainerAvatar>

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
      </StyledContainerLinks>

      <StyledBottomContainer>
        <Button
          text="Cerrar sesion"
          type="button"
          variant="secondary"
          onClick={() => dispatch(logOut() as any)}
        />
      </StyledBottomContainer>
    </StyledContainer>
  );
};

export default NavAdmin;
