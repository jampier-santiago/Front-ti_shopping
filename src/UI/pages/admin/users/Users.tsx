// Packages
import { FC } from "react";

// Styles
import useStyles from "styles/admin/users.styles";

// Controllers
import useUsersApplication from "logic/admin/users/application/user.application";

const Users: FC = () => {
  // Styles
  const { StyledMain, StyledTitle, StyledBody, StyledRow, StyledButtonRow } =
    useStyles();

  // Controllers
  const { users, deletePeople } = useUsersApplication();

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

              <StyledButtonRow
                active={user.state === 0}
                onClick={() => deletePeople(user.Id_people)}
              >
                {user.state === 0 ? "Activar" : "Desactivar"}
              </StyledButtonRow>
            </StyledRow>
          ))}
      </StyledBody>
    </StyledMain>
  );
};

export default Users;
