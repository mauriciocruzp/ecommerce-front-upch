import NavBar from '../../containers/NavBar/NavBar';
import NotFoundSvg from '../../assets/svg/notFound.svg';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigator = useNavigate();

  const onClick = (e) => navigator('/');

  return (
    <div className='w-full h-screen flex flex-col'>
      <NavBar />
      <div className='h-full flex justify-center items-center'>
        <div className='w-5/6 flex gap-8'>
          <div className='w-1/2'>
            <img src={NotFoundSvg} draggable={false} className='w-11/12' />
          </div>
          <div className='w-1/2 flex flex-col justify-center gap-6'>
            <h1>La pagina no fue encontrada</h1>
            <h4>
              Esta pagina no existe o fue eliminada.
              <br />
              Te sugerimos regresar a la pagina principal
            </h4>
            <div>
              <Button onClickHandler={onClick}>Regresar a pagina principal</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
