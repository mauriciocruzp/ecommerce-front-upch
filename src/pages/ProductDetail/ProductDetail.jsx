import Button from '../../components/Button/Button';
import NavBar from '../../containers/NavBar/NavBar';
import './ProductDetail.css'

function ProductDetail(props) {
  return (
    <>
      <NavBar />
      <div className="product-detail">
        <div className="pd-container">
          <div className="img-product-container">
            <div className="img-product-div">
              <img className='img-product' src={props.img} alt={props.productName} />
            </div>
          </div>
          <div className="info-product-container">
            <div className="name-product-info">
              <h1>{props.productName}</h1>
            </div>
            <div className='details'>
              <p>{props.details}</p>
            </div>
            <div className="price-details">
              <h1>${props.price}</h1>
            </div>
            <input min={1} defaultValue={1} type='number' id='number-add' name='number-add'/>
            <Button text='Agregar al carrito' width='238px' classNameButton='primary-button' />
          </div>
        </div>

      </div>
    </>
  );
}

export default ProductDetail;