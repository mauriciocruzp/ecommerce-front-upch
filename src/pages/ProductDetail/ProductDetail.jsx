import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/services/product';
import Button from '../../components/Button/Button';
import NavBar from '../../containers/NavBar/NavBar';
import './ProductDetail.css';

function ProductDetail(props) {

  const params = useParams();

  const [ product, setProduct ] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getProductById(params.id);
      console.log(response);
      setProduct(response.data.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="product-detail">
        <div className="pd-container">
          <div className="img-product-container">
            <div className="img-product-div">
              <img className='img-product' src={product.imageUrl} alt={product.title} />
            </div>
          </div>
          <div className="info-product-container">
            <div className="name-product-info">
              <h1>{product.title}</h1>
            </div>
            <div className='details'>
              <p>{product.description}</p>
            </div>
            <div className="price-details">
              <h1>${product.price}</h1>
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