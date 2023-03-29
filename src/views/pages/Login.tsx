import useViews from "..";
import useStyles from "styles";
import useControllers from "controllers";

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
  const { useLoginControllers } = useControllers();
  const { redirectUrl, onSubmit, handleSubmit, register, errors } =
    useLoginControllers();

  return (
    <StyledMain>
      {/* form */}
      <StyleLeftSection>
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
            <Button onClick={() => redirectUrl("/")} text="Crear una cuenta" />
          </StyleRow>
        </StyleForm>
      </StyleLeftSection>

      <StyleRigthtSection
        style={{ backgroundImage: `url('${bgRight}')` }}
      ></StyleRigthtSection>
    </StyledMain>
  );
};

export default Login;
