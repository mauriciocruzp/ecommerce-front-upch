import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import NavBar from "../NavBar/NavBar";
import "./NewProduct.css"


function NewProduct(props) {
  return (
    <>
      <NavBar />
       <div className="new-product">
        <h1>Agregar nuevo producto</h1>
          <div className="np-container">
            <div className="product-details">
              <div className="img-product-div">
                <img src={props.img} alt={props.productName} />
              </div>
              <Button text="Agregar imagen" />
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
            <div className="product-info">
              <div className="product-name">
                <Input text="Nuevo producto:" type="text" />
              </div>
              <div className="details">
                <Input text="Descripción" type="text" />
              </div>
              <div className="inventory">
                <Input text="Cantidad de inventario" type="number" />
              </div>
              <div className="price">
                <Input text="Precio" type="text" />
              </div>
              <div className="upload-confirmation-product">
                <Input type="checkbox" text="Al publicar un producto, acepto los términos y condiciones de uso del servicio proporcionado" />
                <Button classNameButton="primary-button" text="Subir producto" />
              </div>
            </div>
          </div>
       </div>
    </>
  )
}
export default NewProduct;