import useViews from "..";

const Login = () => {
  const { useComponents } = useViews();
  const { Button } = useComponents();
  return (
    <main>
      {/* form */}
      <section>
        <h1>Sign In</h1>
        <form onSubmit={() => {}}>
          <div>
            <label htmlFor="nameUser">Nombre de usuario</label>
            <input
              id="nameUser"
              type={"email"}
              placeholder="Escriba su usuario"
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type={"password"}
              placeholder="Escriba su contraseña"
            />
          </div>
          <div>
            <Button className="" text="Ingresar" />
          </div>
        </form>
      </section>
      {/* decoration  */}
      <section></section>
    </main>
  );
};

export default Login;
