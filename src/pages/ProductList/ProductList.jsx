import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../api/services/ecommerceApi';
import AdminProductCard from '../../components/AdminProductCard/AdminProductCard';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import routes from '../../consts/routes';
import NavBar from '../../containers/NavBar/NavBar';

const ProductList = () => {
  const { data, isLoading } = useGetProductsQuery();

  const renderProducts = () => {
    return data.data.map((product) => <AdminProductCard key={product.id} product={product} />);
  };

  return (
    <>
      <NavBar />
      <div className='flex h-full'>
        <AdminSideBar />
        <div className='w-4/5 px-32 pt-5 pb-28 bg-white flex flex-col gap-8'>
          <div className='flex w-full justify-between items-center'>
            <h1>Lista de productos</h1>
            <Link to={routes.productNew}>
              <Button type='submit'>Nuevo producto</Button>
            </Link>
          </div>

          <div>
            {isLoading ? (
              <div className='h-screen flex justify-center pt-10'>
                <Spinner />
              </div>
            ) : (
              <div className='flex flex-col gap-10'>{renderProducts()}</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
