// Styles
import useStyles from "styles";

// Components
import useComponents from "UI/components";

// Controllers
import useUserApplication from "logic/admin/user/application/user.application";

const User = () => {
  // Styles
  const { useUserStyles } = useStyles();
  const {
    StyledMain,
    StyledTitle,
    StyledForm,
    StyledButton,
    StyledContainerButtons,
    StyledErrors,
  } = useUserStyles();

  // Components
  const { Input, Toast } = useComponents();

  // Constrollers
  const {
    errors,
    handleSubmit,
    register,
    submit,
    isEditingData,
    handleStateForm,
    showToast,
    handleStateToast,
  } = useUserApplication();

  return (
    <StyledMain>
      {showToast && (
        <Toast variant="success" timeHidden={5000} close={handleStateToast}>
          Agregaste un producto al carrito
        </Toast>
      )}

      <StyledTitle>Mi Cuenta</StyledTitle>

      <StyledForm onSubmit={handleSubmit(submit)}>
        <Input
          id="userName"
          placeholder="Tu nombre"
          textLabel="Tu nombre"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />

        {errors.userName && (
          <StyledErrors>Este campo es obligatorio</StyledErrors>
        )}

        <Input
          id="phoneNumber"
          placeholder="Tu numero de telefono"
          textLabel="Tu numero de telefono"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.phoneNumber && (
          <StyledErrors>Este campo es obligatorio</StyledErrors>
        )}

        <Input
          id="userEmail"
          placeholder="Tu correo electronico"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.userEmail && (
          <StyledErrors>Este campo es obligatorio</StyledErrors>
        )}

        <Input
          id="address"
          placeholder="Tu correo electronico"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.address && (
          <StyledErrors>Este campo es obligatorio</StyledErrors>
        )}

        {isEditingData && (
          <StyledContainerButtons>
            <StyledButton text="Guardar" variant="primary" type="submit" />
            <StyledButton
              text="Cancelar"
              variant="secondary"
              type="button"
              onClick={handleStateForm}
            />
          </StyledContainerButtons>
        )}
      </StyledForm>

      {!isEditingData && (
        <StyledButton text="Editar datos" onClick={handleStateForm} />
      )}
    </StyledMain>
  );
};

export default User;
