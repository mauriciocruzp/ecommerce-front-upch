import { generatePath, Link } from 'react-router-dom';
import routes from '../../consts/routes';
import Button from '../Button/Button';

const AdminProductCard = ({ product }) => {
  return (
    <div className='flex justify-between items-center px-4 pb-4 border-b-2 border-gray-100'>
      <div className='flex gap-8'>
        <Link to={generatePath(routes.productDetail, { id: product.id })}>
          <img
            className='w-20 h-20 object-cover'
            src={product.imageUrl}
            alt={product.name}
          />
        </Link>
        <div>
          <Link to={generatePath(routes.productDetail, { id: product.id })}>
            <h2>{product.title}</h2>
          </Link>
          <p>Precio: ${product.price}</p>
          <p>Estado de publicación: {product.productStatus.name}</p>
        </div>
      </div>
      <div className='flex gap-8'>
        <Link to={generatePath(routes.productEdit, { id: product.id })}>
          <Button type='submit'>Editar</Button>
        </Link>
      </div>
    </div>
  );
};

export default AdminProductCard;
