import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as Yup from 'yup';
import Checklist from "../../assets/svg/city_buildings.svg";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { createAddress } from "../../api/services/address"
import NavBar from "../../containers/NavBar/NavBar";

function AddressForm() {

  const navigate = useNavigate();

  const initialValues = {
    street: "",
    zipcode: "",
    state: "",
    country: ""
  }

    const validationSchema = Yup.object().shape({
        street: Yup.string().required("El nombre de la calle es requerido"),
        state: Yup.string().required("El nombre de tu estado es requerido"),
        zipcode:Yup
        .string()
        .min(5,"El codigo postal deben ser minimo 5 digitos")
        .max(5, "El codigo postal no puede ser mayor a 5 digitos")
        .required("El codigo postal es requerido"),
        country: Yup.string().required("El pais es requerido")
    })

  async function handleSubmit(values) {
    const response = await createAddress(values.street, values.zipcode, values.state, values.country)
    console.log(values)
    if (response.status == 201) {
      alert("Direccion agregada");
      navigate("/address");
      return
    }
    alert(response.data.message);
    return
  }

  return (
    <>
      <NavBar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched
        }) => (
          <div>
            {console.log(errors)}
            <div className="h-screen flex justify-between items-center">
              <div className="w-2/3 h-full grid justify-items-center items-center">
                <div className="w-2/3">
                  <h1 className="pb-2 text-5x-l">Agrega una direccion</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="my-5">
                      <Input
                        id="street"
                        name="street"
                        text="Calle:"
                        type="text"
                        placeholder="Ej: Avenida Rio Tulija"
                        value={values.street}
                        handleChange={handleChange}
                        handleBlur={handleBlur}/>
                        {touched.street && errors.street && (
                          <p className="error-text">{errors.street}</p>
                        )}
                    </div>
                    <div className="my-5">
                      <Input
                        id="zipcode"
                        text="Codigo Postal:"
                        type="number"
                        placeholder="Ej: 29047"
                        value={values.zipcode}
                        handleChange={handleChange}
                        handleBlur={handleBlur}/>
                        {touched.zipcode && errors.zipcode && (
                          <p className="error-text">{errors.zipcode}</p>
                        )}
                    </div>
                    <div className="my-5">
                      <Input
                        id="state"
                        text="Estado:"
                        type="text"
                        placeholder="Ej: Chiapas"
                        value={values.state}
                        handleChange={handleChange}
                        handleBlur={handleBlur}/>
                        {touched.state && errors.state &&(
                          <p className="error-text">{errors.state}</p>
                        )}
                    </div>
                    <div className="my-5">
                      <Input
                        id="country"
                        text="Pais:"
                        type="text"
                        placeholder="Ej: Mexico"
                        value={values.country}
                        handleChange={handleChange}
                        handleBlur={handleBlur}/>
                        {touched.country && errors.country && (
                          <p className="error-text">{errors.country}</p>
                        )}
                    </div>
                    <div className="btn-container" style={{ marginTop: "30px", marginButtom: "20px" }} type="submit">
                      <Button className="primary-button" text="Agregar direccion" width="w-full" type="submit">Agregar dirección</Button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="bg-purple w-2/3 h-full flex flex-col justify-center items-center ">
                <img src={Checklist} alt="homeimg" className="img"/>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default AddressForm;

