import NavBar from '../../containers/NavBar/NavBar';
import Input from '../../components/Input/Input';
import './LogIn.css'
import Button from '../../components/Button/Button';

function LogIn() {
  return (
    <>
      {/* <NavBar /> */}
      <div className="log-in">
        <div className="w-container">
          <div className="head">
            <h1>Ecommerce UPCH</h1>
            <h1>Inicia sesión</h1>
          </div>
          <div className="form-login-container">
            <form action="">
              <Input id='email' text='Correo electronico' type='email' />
              <Input id='password' text='Contraseña' type='password' />
              <div className="btn-container" style={{marginTop: "30px", marginBottom: "20px"}}>
                <Button classNameButton='primary-button' text='Iniciar sesión' onClick="" width="278px" />
              </div>
            </form>
          </div>
          <div className="forgot">
            <a href="#">Olvidé mi contraseña</a>
          </div>
          <div className="have">
            <p style={{ marginRight: "5px" }}>¿No tienes cuenta?</p>
            <a href="#">Crear una cuenta</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;