import { Link } from 'react-router-dom';
import NavBar from '../../containers/NavBar/NavBar';
// import HomeSvg from '../../assets/svg/home.svg';
// import ProductSvg from '../../assets/svg/product.svg';
// import OrderSvg from '../../assets/svg/order.svg';
import Button from '../../components/Button/Button';
import StatsCard from '../../containers/Card/StatsCard';
import OrderCard from '../../containers/Card/OrderCard';
import routes from '../../consts/routes';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';

function Admin() {
  return (
    <div className='h-screen'>
      <NavBar />
      <div className='flex h-full'>
        <AdminSideBar />
        <div className='w-4/5 px-32 py-5 bg-white flex flex-col gap-8'>
          <div className='flex w-full justify-between items-center'>
            <h1>Reporte de ventas</h1>
            <Link to={routes.productNew}>
              <Button type='submit'>Nuevo producto</Button>
            </Link>
          </div>

          <div className='flex justify-between flex-wrap h-4/5'>
            <h5>
              Proximamente se mostrará estadisticas de la tienda, gracias!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
