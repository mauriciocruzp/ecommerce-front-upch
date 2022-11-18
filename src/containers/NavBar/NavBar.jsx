import SearchSvg from '../../assets/svg/search.svg';
import CartSvg from '../../assets/svg/cart.svg';
import AvatarSvg from '../../assets/svg/avatar.svg';
import './NavBar.css';

function NavBar() {
  return (
    <div className='flex w-full h-12 px-8 justify-between bg-white items-center'>
      <h3 className='text-lg'>E-commerce</h3>
      <div className='w-1/2 h-2/3 flex items-center'>
        <img src={SearchSvg} className='absolute pl-3 to-gray-500' />
        <input type='text' className='w-full h-full bg-slate-100 rounded-full px-10 text-sm' />
      </div>
      <div className='flex justify-center items-center gap-20'>
          <a href='#' className='w-8 h-8 px-2.5 py-1.5 bg-principal-purple rounded-xl flex justify-center items-center'>
            <img src={CartSvg}  className='w-3.5 h-3.5' />
          </a>
        <div className='w-8 h-8'>
          <img src={AvatarSvg} className='w-full h-full' draggable={false} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
