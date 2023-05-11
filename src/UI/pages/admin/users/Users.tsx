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
  const { users } = useUsersApplication();

  console.log(users);

  return (
    <StyledMain>
      <StyledTitle>Nuestros usuarios</StyledTitle>

      <StyledBody>
        {users.length > 0 &&
          users.map((user) => (
            <StyledRow key={user.Id_people}>
              <span>
                {user.f_name} {user.f_lastname || ""}
              </span>

              <StyledContainerIcons active={user.state === 0}>
                {user.state === 0 ? "Activar" : "Desactivar"}
              </StyledContainerIcons>
            </StyledRow>
          ))}
      </StyledBody>
    </StyledMain>
  );
};

export default Users;
