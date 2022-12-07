import { useGetOrdersQuery } from '../../api/services/ecommerceApi';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import OrderCard from '../../components/OrderCard/OrderCard';
import Spinner from '../../components/Spinner/Spinner';
import NavBar from '../../containers/NavBar/NavBar';

const OrderListAdmin = () => {
  const { data, isLoading } = useGetOrdersQuery();

  function renderOrders() {
    return data.data.map((order) => {
      return <OrderCard key={order.id} order={order} />;
    });
  }
  return (
    <div className='h-screen'>
      <NavBar />
      <div className='flex h-full'>
        <AdminSideBar />
        <div className='w-full'>
          <div className='mx-4 pt-5 pl-5 mt-4'>
            <p className='text-2xl font-semibold'>Mis pedidos</p>
          </div>

          <hr className='bg-gray-300 mx-6' />

          {data ? (
            isLoading ? (
              <div className='w-full flex justify-center items-center'>
                <Spinner />
              </div>
            ) : (
              <div className='flex flex-col gap-4 mx-40 mt-4'>
                {renderOrders()}
              </div>
            )
          ) : isLoading ? (
            <div className='w-full flex justify-center items-center'>
              <Spinner />
            </div>
          ) : (
            <div className='w-full flex justify-center items-center'>
              <p>No hay pedidos</p>
            </div>
          )}

          <div className='flex flex-col gap-4 mx-40 mt-4'></div>
        </div>
      </div>
    </div>
  );
};

export default OrderListAdmin;
