import { generatePath, Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../api/services/ecommerceApi';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import routes from '../../consts/routes';
import NavBar from '../../containers/NavBar/NavBar';

const ProductList = () => {
  const { data, isLoading } = useGetProductsQuery();

  const renderProducts = () => {
    return data.data.map((product) => {
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
    });
  };

  return (
    <div className='h-screen'>
      <NavBar />
      <div className='flex h-full'>
        <AdminSideBar />
        <div className='w-4/5 px-32 py-5 bg-white flex flex-col gap-8'>
          <div className='flex w-full justify-between items-center'>
            <h1>Lista de productos</h1>
            <Link to={routes.productNew}>
              <Button type='submit'>Nuevo producto</Button>
            </Link>
          </div>

          <div>
            {isLoading ? (
              <Spinner />
            ) : (
              <div className='flex flex-col gap-10'>{renderProducts()}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
