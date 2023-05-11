// Packages
import { FC } from "react";

// Styles
import useStyles from "styles/admin/users.styles";

// Controllers
import useUsersApplication from "logic/admin/users/application/user.application";

const Users: FC = () => {
  // Styles
  const {
    StyledMain,
    StyledTitle,
    StyledBody,
    StyledRow,
    StyledContainerIcons,
  } = useStyles();

  // Controllers
  const {} = useUsersApplication();

  return (
    <StyledMain>
      <StyledTitle>Nuestros usuarios</StyledTitle>

      <StyledBody>
        <StyledRow>
          <span>Jampier</span>

          <StyledContainerIcons active={false}>Activar</StyledContainerIcons>
        </StyledRow>
      </StyledBody>
    </StyledMain>
  );
};

export default Users;
