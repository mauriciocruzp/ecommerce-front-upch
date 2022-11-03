import Button from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import "../SignUp/SignUp.css"

function SignUp() {
    return (  
        <div className="sign-Up">

            <div className="w-container">

                <div className="head">
                    <h1>Ecommerce UPCH</h1>
                    <h1>Registro de Usuario</h1>
                </div>
                <div className="form-signup-container">
                    <form action="">
                        <Input id="Name" text="Nombre" type="text"></Input>
                        <Input id="Last-name" text="Apellido" type="text"></Input>
                        <Input id="Date-of-born" text="Fecha de Nacimiento" type="date"></Input>
                        <Input id="Email" text="Correo Electronico" type="email"></Input>
                        <Input id="Password" text="Contraseña" type="password"></Input>
                        <Input id="Review-password" text="Confirmar contraseña" type="password"></Input>
                        <div className="btn-container" style={{marginTop: "30px", marginBottom: "20px"}}>
                                <Button className="primary-button" text="Registrar usuario" onClick="" widht="278px"></Button>
                        </div>    
                    </form>
                </div>
                <div className="have-account">
                    <a href="#"> Ya tengo una cuenta</a>
                </div>
            </div>

        </div>
    );
}

export default SignUp;