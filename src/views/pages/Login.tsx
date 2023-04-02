// Views
import useViews from "..";

// Styles
import useStyles from "styles";

// Controllers
import useLoginApplication from "../../db/login/application/login.application";

//assets
import bgRight from "../../assets/img/login.jpg";

const Login = () => {
  //components
  const { useComponents } = useViews();
  const { Button, Input } = useComponents();

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
  } = useLoginApplication();

  return (
    <StyledMain>
      {/* form */}
      <StyleLeftSection>
        {isLogin ? (
          <>
            <StyleTitle>Sign In</StyleTitle>
            <StyleForm onSubmit={handleSubmit(onSubmit)}>
              <StyleRow>
                <Input
                  id="emailUser"
                  type={"email"}
                  placeholder="Escriba su usuario"
                  textLabel="Nombre de usuario"
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
                    setUpdateRoute(true);
                  }}
                  text="Crear una cuenta"
                />
              </StyleRow>
            </StyleForm>
          </>
        ) : (
          <>
            <StyleTitle>Register</StyleTitle>
            <StyleForm>
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

              {/* Rol usuario */}
              <StyleRow>
                <Input
                  id="role"
                  type={"text"}
                  placeholder="Escriba su apellido"
                  textLabel="Escriba su Rol"
                  register={register}
                  required
                />

                {errors.role && (
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
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              {/* confirm password usuario */}
              <StyleRow>
                <Input
                  id="valuedPassword"
                  type={"passsword"}
                  placeholder="Confirmar contraseña"
                  textLabel="Confirmar contraseña"
                  register={register}
                  required
                />

                {errors.valuedPassword && (
                  <StyleErrorInput>Este campo es requerido</StyleErrorInput>
                )}
              </StyleRow>

              <StyleRow>
                <Button text="Registrar" type="submit" />
              </StyleRow>
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
