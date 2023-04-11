// Styles
import useStyles from "styles";

const User = () => {
  // Styles
  const { useUserStyles } = useStyles();
  const { StyledMain, StyledTitle } = useUserStyles();

  return (
    <StyledMain>
      <StyledTitle>Mi Cuenta</StyledTitle>

      <section>Role:</section>
    </StyledMain>
  );
};

export default User;
