import { Link } from 'react-router-dom';
import NavBar from '../../containers/NavBar/NavBar';
// import HomeSvg from '../../assets/svg/home.svg';
// import ProductSvg from '../../assets/svg/product.svg';
// import OrderSvg from '../../assets/svg/order.svg';
import Button from '../../components/Button/Button';
import StatsCard from '../../containers/Card/StatsCard';
import OrderCard from '../../containers/Card/OrderCard';
import routes from '../../consts/routes';

function Admin() {

  return (
    <>
    <NavBar />
    <div className='flex bg-white'>
      <div className='bg-gray-200 w-1/5 pl-8 pt-5 flex flex-col gap-4'>
        <h2>Panel de control</h2>
        <ul className='flex flex-col gap-4'>
          <div className='flex gap-2'>
              {/* <img src={HomeSvg} className='w-4' /> */}
              <li>Home</li>
          </div>
          <div className='flex gap-2'>
            {/* <img src={ProductSvg} className='w-4' /> */}
            <li>Productos</li>
          </div>
          <div className='flex gap-2'>
            {/* <img src={OrderSvg} className='w-4' /> */}
                <li>Ordenes</li>
          </div>
          </ul>
      </div>
      <div className='w-4/5 pl-32 py-4 flex flex-row'>
        {/* Estadísticas */}
        <div className='flex flex-col sm:space-y-6'>
          <h1 >Reporte de ventas</h1>
          <StatsCard />
          <StatsCard />
        </div>
      </div>
        <Link to={routes.productNew} className='py-4 pr-12'>
          <Button type="submit">Nuevo producto</Button>
        </Link>
    </div>
    </>
  );
}

export default Admin;