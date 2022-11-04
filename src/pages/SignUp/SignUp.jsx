import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import "./SignUp.css"

function SignUp() {
  return (
    <div className="sign-up">

      <div className="su-container">

        <div className="su-head">
          <h1>Bienvenido a Ecommerce UPCH</h1>
          <h2>Crea tu cuenta</h2>
        </div>
        <div className="form-signup-container">
          <form action="">
            <Input id="Name" text="Nombre" type="text"></Input>
            <Input id="Last-name" text="Apellido" type="text"></Input>
            <Input id="Date-of-born" text="Fecha de nacimiento" type="date"></Input>
            <Input id="Email" text="Correo Electronico" type="email"></Input>
            <Input id="Password" text="Contraseña" type="password"></Input>
            <Input id="Review-password" text="Confirmar contraseña" type="password"></Input>
            <div className="btn-container" style={{ marginTop: "30px", marginBottom: "20px" }}>
              <Button classNameButton="primary-button" text="Crear cuenta" onClick="" width="278px"></Button>
            </div>
          </form>
        </div>
        <div className="have-account">
          <p style={{ marginRight: "5px" }}>¿Ya tienes cuenta? </p>
          <a href="#">Inicia sesión</a>
        </div>
      </div>

    </div>
  );
}

export default SignUp;