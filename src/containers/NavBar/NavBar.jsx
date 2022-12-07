import { Menu, Transition } from '@headlessui/react';
import SearchSvg from '../../assets/svg/search.svg';
import CartSvg from '../../assets/svg/cart.svg';
import AvatarSvg from '../../assets/svg/avatar.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../reducers/keywordReducer';
import { Fragment } from 'react';
import routes from '../../consts/routes';
import useAuth from '../../hooks/useAuth';

function NavBar() {
  const { authState, logout } = useAuth();

  const keyword = useSelector((state) => state.keyword.value);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const keyword = document.getElementById('searchInput').value;
    dispatch(update(keyword));
    navigate(`/product?keyword=${keyword}`);
  }

  return (
    <div className='flex w-full h-12 px-8 justify-between bg-white items-center shadow-sm'>
      <Link to={routes.home}>
        <h3 className='text-lg'>E-commerce</h3>
      </Link>
      <form className='w-1/2 h-2/3 flex items-center' onSubmit={handleSubmit}>
        <button className='absolute pl-3' type='submit'>
          <img src={SearchSvg} className='to-gray-500' />
        </button>
        <input
          type='text'
          className='w-full h-full bg-slate-100 rounded-full px-10 text-sm'
          id='searchInput'
          defaultValue={keyword}
        />
      </form>
      <div className='flex justify-center items-center gap-20'>
        <Link
          to={routes.cart}
          className='w-8 h-8 px-2.5 py-1.5 bg-principal-purple rounded-xl flex justify-center items-center'
        >
          <img src={CartSvg} className='w-3.5 h-3.5' />
        </Link>
        {authState.isAuthenticated ? (
          <Menu as='div'>
            <Menu.Button className='w-full h-8 flex items-center'>
              <img
                src={AvatarSvg}
                className='w-full h-full'
                draggable={false}
              />
              <svg
                className='-mr-1 ml-2 h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                  clipRule='evenodd'
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='menu-button'
                  tabIndex='-1'
                >
                  <div className='py-1' role='none'>
                    <Link
                      to={routes.addressList}
                      className='text-gray-700 block px-4 py-2 text-sm'
                      role='menuitem'
                      tabIndex='-1'
                      id='menu-item-0'
                    >
                      Mis direcciones
                    </Link>
                    {authState.user.roles.includes('ROLE_ADMIN') && (
                      <Link
                        to={routes.admin}
                        className='text-gray-700 block px-4 py-2 text-sm'
                        role='menuitem'
                        tabIndex='-1'
                        id='menu-item-1'
                      >
                        Panel de administración
                      </Link>
                    )}
                    <Link
                      to={routes.login}
                      onClick={() => logout()}
                      className='text-red-500 block px-4 py-2 text-sm'
                      role='menuitem'
                      tabIndex='-1'
                      id='menu-item-0'
                    >
                      Cerrar sesión
                    </Link>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        ): (
          // button to login
          <Link
            to={routes.login}
            className='w-30 h-8 px-2.5 py-1.5 bg-principal-purple rounded-xl flex justify-center items-center'
          >
            <a className='text-white'>Iniciar sesión</a>
          </Link>

        )}
      </div>
    </div>
  );
}

export default NavBar;
