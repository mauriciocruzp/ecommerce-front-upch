import SearchSvg from '../../assets/svg/search.svg';
import CartSvg from '../../assets/svg/cart.svg';
import AvatarSvg from '../../assets/svg/avatar.svg';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate = useNavigate();

  function handleSubmit(e) {
    const keyword = document.getElementById('searchInput').value;
    console.log(keyword);
    navigate(`/searchpage/?keyword=${keyword}`);
  }

  return (
    <div className='flex w-full h-12 px-8 justify-between bg-white items-center shadow-sm'>
      <Link to='/'>
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
        />
      </form>
      <div className='flex justify-center items-center gap-20'>
        <a
          href='#'
          className='w-8 h-8 px-2.5 py-1.5 bg-principal-purple rounded-xl flex justify-center items-center'
        >
          <img src={CartSvg} className='w-3.5 h-3.5' />
        </a>
        <div className='w-8 h-8'>
          <img src={AvatarSvg} className='w-full h-full' draggable={false} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
