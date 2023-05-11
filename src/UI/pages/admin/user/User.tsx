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
    infoToast,
  } = useUserApplication();

  return (
    <StyledMain>
      {showToast && (
        <Toast
          variant={infoToast.state}
          timeHidden={5000}
          close={handleStateToast}
        >
          {infoToast.msg}
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
          id="num_telephone"
          placeholder="Tu numero de telefono"
          textLabel="Tu numero de telefono"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.num_telephone && (
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
          placeholder="Tu direccion"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.address && (
          <StyledErrors>Este campo es obligatorio</StyledErrors>
        )}

        <Input
          id="CVC"
          placeholder="Tu CVC de tu tarjeta"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.CVC && <StyledErrors>Este campo es obligatorio</StyledErrors>}

        <Input
          id="N_credit_card"
          placeholder="Tu numero de tarjeta"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.N_credit_card && (
          <StyledErrors>Este campo es obligatorio</StyledErrors>
        )}

        <Input
          id="credit_card_expiration_date"
          placeholder="Tu fecha de expiracion de tu tarjeta"
          textLabel="Tu correo electronico"
          register={register}
          dark
          required
          disabled={!isEditingData}
        />
        {errors.credit_card_expiration_date && (
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
        <StyledButton
          text="Quiero editar mis datos"
          onClick={handleStateForm}
        />
      )}
    </StyledMain>
  );
};

export default User;
