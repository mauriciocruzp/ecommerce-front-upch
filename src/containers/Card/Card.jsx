import { Link } from 'react-router-dom';
import './Card.css';

function Card({ product }) {
  return (
    <div className='card'>
      <div className='img-container'>
        <Link to={`product/${product.id}`}>
          <img src={product.imageUrl} alt={product.title} className='img-card' />
        </Link>
      </div>
      <div className='name'>
        <Link to={`product/${product.id}`}>
          <p><b>{product.title}</b></p>
        </Link>
      </div>
      <div className='info'>
        <div className='price'>
          <div className='p'>Precio:</div>
          <div className='number'>{'$' + product.price}</div>
        </div>
        <button className='add-btn' onClick={product.onClick}><Link to={''}><svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' fill='white' className='bi bi-plus-lg' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z' />
        </svg> </Link></button>
      </div>
    </div>
  );
}

export default Card;