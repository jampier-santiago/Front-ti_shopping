// Packages
import { useDispatch } from "react-redux";

// Styles
import useStyles from "./navAdmin.styles";

// Components
import useComponents from "..";

// Logic
import useAdminLayout from "logic/admin/layout/application/layout.applications";
import { logOut } from "redux/slices/auth/thunk";

// Assets
import iconMenu from "assets/icons/menu.png";

const LinkWithRestriction = (role: string, link: any) => {
  // Styles
  const { StyledLink, StyledLi } = useStyles();

  return role === "ADMIN" ? (
    <StyledLi key={link.path}>
      <StyledLink
        className={({ isActive }) => (isActive ? "active-link-menu" : "")}
        to={link.path}
      >
        {link.text}
      </StyledLink>
    </StyledLi>
  ) : (
    ""
  );
};

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
  const { handleStateModal, userName, showModal, role, links } =
    useAdminLayout();

  return (
    <StyledContainer>
      <StyledModal className={showModal ? "show-menu" : "hidde-menu"}>
        <StyledContainerLinks>
          {links.map((link) => (
            <>
              {!link.restriction ? (
                <StyledLi key={link.path}>
                  <StyledLink
                    className={({ isActive }) =>
                      isActive ? "active-link-menu" : ""
                    }
                    to={link.path}
                  >
                    {link.text}
                  </StyledLink>
                </StyledLi>
              ) : (
                LinkWithRestriction(role, link)
              )}
            </>
          ))}

          <StyledLi>
            <Button
              text="Cerrar sesion"
              type="button"
              variant="secondary"
              onClick={() => dispatch(logOut() as any)}
            />
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
        {links.map((link) => (
          <>
            {!link.restriction ? (
              <StyledLi key={link.path}>
                <StyledLink
                  className={({ isActive }) =>
                    isActive ? "active-link-menu" : ""
                  }
                  to={link.path}
                >
                  {link.text}
                </StyledLink>
              </StyledLi>
            ) : (
              LinkWithRestriction(role, link)
            )}
          </>
        ))}
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
