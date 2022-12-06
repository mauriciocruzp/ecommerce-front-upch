import HomeSvg from '../../assets/svg/home.svg';
import ProductSvg from '../../assets/svg/product.svg';
import OrderSvg from '../../assets/svg/order.svg';
import { Link, NavLink } from 'react-router-dom';
import routes from '../../consts/routes';

const AdminSideBar = () => {
  const activeClassName = 'flex gap-2 text-principal-purple text-base';
  const normalClassName = 'flex gap-2 text-gray-900 text-base';

  return (
    <div className='w-1/5 pl-8 pt-5 flex flex-col gap-4 bg-slate-50'>
      <h2>Panel de control</h2>
      <ul className='flex flex-col gap-4'>
        <NavLink
          to={routes.admin}
          className={({ isActive }) =>
            isActive ? activeClassName : normalClassName
          }
        >
          <img src={HomeSvg} className='w-4' />
          <li>Home</li>
        </NavLink>
        <NavLink
          to={routes.productList}
          className={({ isActive }) =>
            isActive ? activeClassName : normalClassName
          }
        >
          <img src={ProductSvg} className='w-4' />
          <li>Productos</li>
        </NavLink>
        <NavLink
          to={routes.orderList}
          className={({ isActive }) =>
            isActive ? activeClassName : normalClassName
          }
        >
          <img src={OrderSvg} className='w-4' />
          <li>Ordenes</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminSideBar;
