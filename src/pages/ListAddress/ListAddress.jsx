import { useParams, useSearchParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import NavBar from '../../containers/NavBar/NavBar';
import { useGetAddressesByUserIdQuery } from '../../api/services/ecommerceApi';

function ListAddres() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const { data: addressResponse, isLoading: isLoadingAddress } =
    useGetAddressesByUserIdQuery(user.id);

  const renderAddresses = () => {
    return address.map((address) => {
      return (
        <div
          key={user.id}
          className='flex justify-between items-center px-4 pb-4 border-b-2 border-gray-100'
        >
          <div className='flex gap-8'>
            <Link
              to={generatePath(routes.UpdateAddress, { id: address.id })}
            ></Link>
            <div>
              <Link to={generatePath(routes.UpdateAddress, { id: address.id })}>
                <h2>Direccion : {address.id}</h2>
              </Link>
              <p>Calle: {address.street}</p>
              <p>Codigo postal: {address.zipcode}</p>
              <p>Estado: {address.state}</p>
              <p>Pais: {address.country}</p>
            </div>
          </div>
          <div className='flex gap-8'>
            <Link to={generatePath(routes.UpdateAddress, { id: address.id })}>
              <Button type='submit'>Editar</Button>
            </Link>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <NavBar />
      <div className='flex h-full'>
        <AdminSideBar />
        <div className='w-4/5 px-32 pt-5 pb-28 bg-white flex flex-col gap-8'>
          <div className='flex w-full justify-between items-center'>
            <h1>Lista de direcciones</h1>
            <Link to={routes.AddressForm}>
              <Button type='submit'>Nueva direccion</Button>
            </Link>
          </div>

          <div>
            {isLoading ? (
              <div className='h-screen flex justify-center pt-10'>
                <Spinner />
              </div>
            ) : (
              <div className='flex flex-col gap-10'>{renderAddresses()}</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListAddres;
