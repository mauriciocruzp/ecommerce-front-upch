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
              <div className="img-np-div">
                <Input type='file' id='p-image' />
              </div>
              <Button classNameButton='primary-button' text="Agregar imagen" width='398px' />
              <div className="product-category">
                <label>Categoría
                  <br />
                  <select className="category-select">
                    <option value="">Categoría</option>
                    <option value="">Tecnología</option>
                    <option value="">Alimentos</option>
                    <option value="">Música</option>
                  </select>
                </label>
              </div>
              <Button classNameButton="danger-button" text="Cancelar" width='398px'/>
            </div>
            <div className="cont-right">
              <div className="product-info">
                <div className="product-name">
                  <NewProductInput text="Nombre del producto:" width='680px' height='32px' type="text" />
                </div>
                <div className="details">
                  <NewProductInput text="Descripción:" width='680px' height='120px' type="text" />
                </div>
                <div className="inventory-price">
                  <NewProductInput text="Cantidad en inventario:" type="number" width='80px' height='32px' />
                  <NewProductInput text="Precio (MXN):" width='120px' height='32px' type="number" />
                </div>
                <div className="upload-confirmation-product">
                  <Button classNameButton="primary-button" text="Subir producto" width='398px'/>
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