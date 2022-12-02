import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import City from "../../assets/svg/city_buildings.svg";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../containers/NavBar/NavBar";
import { Formik } from "formik";
import { update } from "../../reducers/keywordReducer";
import * as Yup from "yup";
import { updateAddress } from "../../api/services/address";
import { useEffect } from "react";
import { useGetAddressByIdQuery } from "../../api/services/ecommerceApi";
import Spinner from "../../components/Spinner/Spinner";
function UpdateAddress() {
  const params = useParams();

  const { data: addressResponse, isLoading: isLoadingAddress } =
    useGetAddressByIdQuery(params.id);

  const navigate = useNavigate();

  const initialValues = {
    street: "",
    zipcode: "",
    state: "",
    country: "",
  };
  const validationSchema = Yup.object().shape({
    street: Yup.string().required("El nombre de la calle es requerido"),
    state: Yup.string().required("El nombre de tu estado es requerido"),
    zipcode: Yup.string()
      .min(5, "El codigo postal deben ser minimo 5 digitos")
      .max(5, "El codigo postal no puede ser mayor a 5 digitos")
      .required("El codigo postal es requerido"),
    country: Yup.string().required("El pais es requerido"),
  });
  const handleSubmit = async (values) => {
    const response = await updateAddress(
      values.street,
      values.zipcode,
      values.state,
      values.country
    );
    if (response.status === 200) {
      alert("Direccion actualizada correctamente");
      navigate("/");
      return;
    }
  };
  return (
    <>
      <NavBar />

      <div className="h-screen flex justify-between items-center">
        <div className="w-2/3 h-full grid justify-items-center items-center">
          <div className="w-2/3">
            <h1 className="pb-2 text-5x-l">Edita tu direccion</h1>
            {isLoadingAddress ? (
              <Spinner />
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleBluer,
                  handleSubmit,
                  touched,
                  setFieldValue,
                }) => {
                  useEffect(() => {
                    setFieldValue("street", addressResponse.data.street);
                    setFieldValue("zipcode", addressResponse.data.zipcode);
                    setFieldValue("state", addressResponse.data.state);
                    setFieldValue("country", addressResponse.data.country);
                  }, [addressResponse]);
                  return (
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
                          handleBlur={handleBluer}
                        />
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
                          handleBlur={handleBluer}
                        />
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
                          handleBlur={handleBluer}
                        />
                        {touched.state && errors.state && (
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
                          handleBlur={handleBluer}
                        />
                        {touched.country && errors.country && (
                          <p className="error-text">{errors.country}</p>
                        )}
                      </div>
                      <div
                        className="btn-container"
                        style={{ marginTop: "30px", marginButtom: "20px" }}
                        type="submit"
                      >
                        <Button
                          className="primary-button"
                          text="Agregar direccion"
                          width="w-full"
                          type="submit"
                        >
                          Agregar dirección
                        </Button>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            )}
          </div>
        </div>

        <div className="bg-purple w-2/3 h-full flex flex-col justify-center items-center ">
          <img src={City} alt="homeimg" className="img" />
        </div>
      </div>
    </>
  );
}

export default UpdateAddress;
