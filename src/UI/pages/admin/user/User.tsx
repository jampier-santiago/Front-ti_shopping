// Styles
import useStyles from "styles";

// Components
import useComponents from "UI/components";

// Controllers
import useUserApplication from "logic/admin/user/application/user.application";

const User = () => {
  // Styles
  const { useUserStyles } = useStyles();
  const { StyledMain, StyledTitle, StyledForm } = useUserStyles();

  // Components
  const { Input, Button } = useComponents();

  // Constrollers
  const {
    errors,
    handleSubmit,
    register,
    submit,
    isEditingData,
    handleStateForm,
  } = useUserApplication();

  return (
    <StyledMain>
      <StyledTitle>Mi Cuenta</StyledTitle>

      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          id="userName"
          placeholder="Tu nombre"
          textLabel="Tu nombre"
          register={register}
          dark
          required
        />

        <Input
          id="phoneNumber"
          placeholder="Tu numero de telefono"
          textLabel="Tu numero de telefono"
          register={register}
          dark
          required
        />

        <Input
          id="userEmail"
          placeholder="Tu correo electronico"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
        />

        <Input
          id="address"
          placeholder="Tu correo electronico"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
        />

        {isEditingData && (
          <Button text="Guardar" variant="primary" type="submit" />
        )}
      </StyledForm>

      {!isEditingData && (
        <Button text="Editar datos" onClick={handleStateForm} />
      )}
    </StyledMain>
  );
};

export default User;
