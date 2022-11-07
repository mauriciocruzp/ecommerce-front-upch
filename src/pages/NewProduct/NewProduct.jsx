import Button from "../../components/Button/Button";
import NewProductInput from "../../components/Input/NewProductInput";
import NavBar from "../../containers/NavBar/NavBar";
import Input from "../../components/Input/Input";
import "./NewProduct.css"


function NewProduct(props) {
  return (
    <>
      <NavBar />
      <div className="new-product">
        <div className="np-container">
          <div className="np-head">
            <h1>Agregar nuevo producto</h1>
          </div>
          <div className="product-details">
            <div className="cont-left">
              <div className="img-pd-div">
                <img src={props.img} alt={props.productName} />
              </div>
              <Button classNameButton='primary-button' text="Agregar imagen" />
              <div className="product-category">
                <label>Categoría
                  <br />
                  <select>
                    <option value="">Categoría</option>
                    <option value="">Tecnología</option>
                    <option value="">Alimentos</option>
                    <option value="">Música</option>
                  </select>
                </label>
              </div>
              <Button classNameButton="danger-button" text="Cancelar" />
            </div>
            <div className="cont-right">
              <div className="product-info">
                <div className="product-name">
                  <NewProductInput text="Nombre del producto:" width='680px' height='32px' type="text" />
                </div>
                <div className="details">
                  <NewProductInput text="Descripción:" width='680px' height='120px' type="text" />
                </div>
                <div className="inventory">
                  <Input text="Cantidad de inventario" type="number" />
                </div>
                <div className="price">
                  <NewProductInput text="Precio" width='51px' height='32px' type="text" />
                </div>
                <div className="upload-confirmation-product">
                  <Input type="checkbox" text="Al publicar un producto, acepto los términos y condiciones de uso del servicio proporcionado" />
                  <Button classNameButton="primary-button" text="Subir producto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewProduct;