// Views
import useViews from "..";

// Styles
import useStyles from "styles";

// Controllers
import useLoginApplication from "logic/login/application/login.application";

//assets
import bgRight from "assets/img/login.jpg";

const Login = () => {
  //components
  const { useComponents } = useViews();
  const { Button, Input, Toast } = useComponents();

  //styles
  const { useLoginStyles } = useStyles();
  const {
    StyledMain,
    StyleLeftSection,
    StyleTitle,
    StyleForm,
    StyleRow,
    StyleRigthtSection,
    StyleErrorInput,
    StyledlinkLogin,
  } = useLoginStyles();

  //constrollers
  const {
    redirectUrl,
    onSubmit,
    handleSubmit,
    register,
    errors,
    isLogin,
    setUpdateRoute,
    onSubmitRegister,
    showToast,
    setShowToast,
  } = useLoginApplication();

  return (
    <StyledMain>
      {showToast && (
        <Toast
          close={() => setShowToast(false)}
          timeHidden={5000}
          variant="error"
        >
          <span>Se produjo un error, intentelo nuevamente</span>
        </Toast>
      )}

      {/* form */}
      <StyleLeftSection>
        {isLogin ? (
          <>
            <StyleTitle>Ingresar</StyleTitle>
            <StyleForm onSubmit={handleSubmit(onSubmit)}>
              <StyleRow>
                <Input
                  id="emailUser"
                  type={"email"}
                  placeholder="Escribe tu correo"
                  textLabel="Correo"
                  register={register}
                  required
                />

                {errors.emailUser && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>
              <StyleRow>
                <Input
                  id="password"
                  type={"password"}
                  placeholder="Escriba su contraseña"
                  textLabel="Contraseña"
                  register={register}
                  required
                />
                {errors.password && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>
              <StyleRow>
                <Button text="Ingresar" type="submit" />
              </StyleRow>
              <StyleRow>
                <Button
                  onClick={() => {
                    redirectUrl("/register");
                    setUpdateRoute((state) => !state);
                  }}
                  text="Crear una cuenta"
                />
              </StyleRow>
            </StyleForm>
          </>
        ) : (
          <>
            <StyleTitle>Registro</StyleTitle>
            <StyleForm onSubmit={handleSubmit(onSubmitRegister)}>
              {/* nombre de usuario*/}
              <StyleRow>
                <Input
                  id="userName"
                  type={"text"}
                  placeholder="Escriba su nombre"
                  textLabel="Escriba su nombre"
                  register={register}
                  required
                />

                {errors.userName && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              {/* password usuario */}
              <StyleRow>
                <Input
                  id="surname"
                  type={"text"}
                  placeholder="Escriba su apellido"
                  textLabel="Escriba su apellido"
                  register={register}
                  required
                />

                {errors.surname && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              {/* Telefono usuario */}
              <StyleRow>
                <Input
                  id="phoneNumber"
                  type={"number"}
                  placeholder="Escriba su número de teléfono"
                  textLabel="Escriba su número de teléfono"
                  register={register}
                  required
                />

                {errors.phoneNumber && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              {/* email usuario */}
              <StyleRow>
                <Input
                  id="email"
                  type={"email"}
                  placeholder="Escriba su email"
                  textLabel="Escriba su email"
                  register={register}
                  required
                />

                {errors.email && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              <StyleRow>
                <Input
                  id="address"
                  placeholder="Escriba su dirección"
                  textLabel="Escriba su dirección"
                  register={register}
                  required
                />

                {errors.address && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              {/* birthDate usuario */}
              <StyleRow>
                <Input
                  id="birthDate"
                  type={"date"}
                  placeholder="Escriba su fecha de nacimiento"
                  textLabel="Escriba su fecha de nacimiento"
                  register={register}
                  required
                />

                {errors.birthDate && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              {/* password usuario */}
              <StyleRow>
                <Input
                  id="password"
                  type={"password"}
                  placeholder="Escriba su contraseña"
                  textLabel="Escriba su contraseña"
                  register={register}
                  required
                />

                {errors.password && (
                  <StyleErrorInput>
                    {(errors as any).password?.message ||
                      "Este campo es requerido"}
                  </StyleErrorInput>
                )}
              </StyleRow>

              {/* confirm password usuario */}
              <StyleRow>
                <Input
                  id="valuePassword"
                  type={"passsword"}
                  placeholder="Confirmar contraseña"
                  textLabel="Confirmar contraseña"
                  register={register}
                  required
                />

                {errors.valuePassword && (
                  <StyleErrorInput>
                    {(errors as any).valuePassword?.message ||
                      "Este campo es requerido"}
                  </StyleErrorInput>
                )}
              </StyleRow>

              <StyleRow>
                <Button text="Registrar" type="submit" />
              </StyleRow>

              <StyledlinkLogin
                onClick={() => {
                  redirectUrl("/login");
                  setUpdateRoute((state) => !state);
                }}
              >
                Ya tengo cuenta
              </StyledlinkLogin>
            </StyleForm>
          </>
        )}
      </StyleLeftSection>
      <StyleRigthtSection
        style={{ backgroundImage: `url('${bgRight}')` }}
      ></StyleRigthtSection>
    </StyledMain>
  );
};

export default Login;
