import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createProduct } from "../../api/services/product";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NewProductInput from "../../components/Input/NewProductInput";
import useAuth from "../../hooks/useAuth";
import "./NewProduct.css";

function NewProduct() {

  const { authState } = useAuth();
  // const { axiosInstance } = useAxiosPrivate();
  useEffect(() => {

    console.log(authState.accessToken);
  }, []);

  const navigate = useNavigate();

  const initialValues = {
    title: "",
    description: "",
    image: null,
    stock: "",
    price: "",
    categoryIds: "",
  };


  const validationSchema = Yup.object({
    title: Yup.string().required("Campo requerido"),
    description: Yup.string().required("Campo requerido"),
    image: Yup.string().required("Campo requerido"),
    stock: Yup.string().required("Campo requerido"),
    price: Yup.string().required("Campo requerido"),
    categoryIds: Yup.string().required("Campo requerido"),
  });


  async function handleSubmit(values) {

    values.categoryIds = 1;

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("image", values.image);
    formData.append("stock", values.stock);
    formData.append("price", values.price);
    formData.append("categoryIds", values.categoryIds);

    console.log(values);

    const response = await createProduct(formData);

    if (response.status === 201) {
      alert("Producto creado exitosamente");
      navigate("/");
      return;
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
      }) => (
      <form className="new-product" onSubmit={handleSubmit}>
        <div className="np-container">
          <div className="np-head">
            <h1>Agregar nuevo producto</h1>
          </div>
          <div className="product-details" >
            <div className="cont-left">
              <div className="img-np-div">
                <Input type='file'  handleChange={(event)=>{
                  setFieldValue("image", event.currentTarget.files[0]);
                }} handleBlur={handleBlur} id='image'/>
              </div>
              <Button classNameButton='primary-button' text="Agregar imagen" width='398px' />
              <div className="product-category">
                <label>Categoría
                  <br />
                  <select className="category-select">
                    <option value="">Categoría</option>
                    <option value="">Tecnología</option>
                    <option value="">Salud</option>
                    <option value="">Electronicos</option>
                    <option value="">Deportes</option>
                  </select>
                </label>
              </div>
              <Button classNameButton="danger-button" text="Cancelar" width='398px'/>
            </div>
            <div className="cont-right">
              <div className="product-info">
                <div className="product-name">
                  <NewProductInput value={values.title} handleChange={handleChange} handleBlur={handleBlur} id="title" text="Nombre del producto:" width='680px' height='32px' type="text" />
                </div>
                <div className="details">
                  <NewProductInput value={values.description} handleChange={handleChange} handleBlur={handleBlur} id="description" text="Descripción:" width='680px' height='120px' type="text" />
                </div>
                <div className="inventory-price">
                  <NewProductInput value={values.stock} handleChange={handleChange} handleBlur={handleBlur} id="stock" text="Cantidad en inventario:" type="number" width='80px' height='32px' />
                  <NewProductInput value={values.price} handleChange={handleChange} handleBlur={handleBlur} id="price" text="Precio (MXN):" width='120px' height='32px' type="number" />
                </div>
                <div className="upload-confirmation-product">
                  <Button classNameButton="primary-button" text="Subir producto" width='398px' type='submit'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      )}
    </Formik>
  )
}
export default NewProduct;