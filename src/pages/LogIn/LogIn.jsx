import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signIn } from "../../api/services/auth";
import LoginSvg from "../../assets/svg/login.svg";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import useAuth from "../../hooks/useAuth";
import "./LogIn.css";

function LogIn() {
  const { setAccessToken, authState } = useAuth();

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo electronico invalido")
      .required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
  });

  async function handleSubmit(values) {
    const response = await signIn(values.email, values.password);

    if (response.status === 200) {
      setAccessToken(response.data.data.accessToken);
      alert("Inicio de sesion exitoso");
      navigate("/");
      return;
    }

    alert("Usuario o contraseña incorrectos");
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <div>
          <div className="h-screen flex justify-between items-center">
            <div className="w-2/3 h-full flex flex-col grid justify-items-center items-center">
              <div className="w-2/3">
                <h1 className="pb-2 text-5xl">Inicia Sesión</h1>
                <p className="pb-5 text-xl text-gray-400">
                  Disfruta de las promociones que tenemos especialmente para ti!
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="pb-5">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={"Correo electronico"}
                      className="w-full text-xl" />
                  </div>
                  <div className="pb-5">
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder={"Contraseña"}
                      className="w-full text-xl" />
                  </div>
                  <div
                    className="btn-container"
                    style={{ marginTop: "30px", marginBottom: "20px" }}
                    type="submit"
                  >
                    <Button
                      children={"Iniciar Sesión"}
                      width="w-full text-xl"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="bg-purple w-2/3 h-full flex flex-col justify-center items-center">
              <img className="img" src={LoginSvg} alt="homeimg" />
            </div>
          </div>
        </div>
        )}
    </Formik>
  );
}

export default LogIn;
