import { addToCart } from '../../api/services/cart';
import Button from '../../components/Button/Button';
import PlusSvg from '../../assets/svg/plus.svg';
import { generatePath, Link } from 'react-router-dom';
import routes from '../../consts/routes';

function Card({ product }) {
  const handleAddToCart = async () => {
    const quantity = 1;
    const response = await addToCart(product.id, quantity);

    if (response.status === 201) {
      console.log('Producto agregado al carrito');
    }
  };

  return (
    <div className='flex flex-col w-1/5 shadow-md'>
      <Link to={generatePath(routes.productDetail, { id: product.id })}>
        <div className='bg-gray-200 w-fit'>
          <img src={product.imageUrl} className='w-full' />
        </div>
      </Link>
      <div className='flex flex-col w-full h-full bg-white px-6 py-5 gap-10'>
        <Link to={generatePath(routes.productDetail, { id: product.id })}>
          <p className='font-normal text-lg'>{product.title}</p>
        </Link>
        <div className='flex justify-between'>
          <p className='font-semibold'>${product.price}</p>
          <Button onClickHandler={handleAddToCart}>
            <img src={PlusSvg} className='w-3' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
