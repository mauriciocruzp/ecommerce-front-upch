import { useParams } from 'react-router-dom';
import { useGetOrderByIdQuery } from '../../api/services/ecommerceApi';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import NavBar from '../../containers/NavBar/NavBar';
import useAuth from '../../hooks/useAuth';

const OrderDetail = () => {
  const params = useParams();

  const { data, isLoading } = useGetOrderByIdQuery(params.id);

  const { authState } = useAuth();

  const getTotalPrice = () => {
    return data.data.orderItems.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  };

  const status = {
    in_progress: "En progreso",
    delivered: "Entregado",
    pending: "Pendiente",
  };

  return (
    <>
      <NavBar />
      <div className='flex'>
        {authState.user.roles.includes('ROLE_ADMIN') && <AdminSideBar />}
        <div className='flex flex-col gap-4 px-16 py-8 min-h-screen w-full'>
          {isLoading ? (
            <div className='h-screen flex justify-center pt-10'>
              <Spinner />
            </div>
          ) : (
            <>
              <div className='flex justify-between'>
                <h1>Detalle del pedido</h1>
                {data.data.orderStatus.name === 'in_progress' &&
                  authState.user.roles.includes('ROLE_ADMIN') && (
                    <div className='flex items-center h-full'>
                      <Button>Finalizar orden</Button>
                    </div>
                  )}
              </div>
              <p>
                Numero de pedido:&nbsp;
                <span className='font-medium'>{data.data.id}</span>
              </p>
              <p>
                Comprador:&nbsp;
                <span className='font-medium'>
                  {data.data.user.firstName} {data.data.user.lastName}
                </span>
              </p>
              <p>
                Estado del pedido:&nbsp;
                <span className='font-medium'>
                  {status[data.data.orderStatus.name]}
                </span>
              </p>
              <p>
                Precio total del pedido:&nbsp;
                <span className='font-medium'>${getTotalPrice()}</span>
              </p>

              <div className='overflow-x-auto relative'>
                <table className='w-full text-sm text-left'>
                  <thead className='text-xs uppercase bg-gray-50'>
                    <tr>
                      <th scope='col' className='py-3 px-6'>
                        Titulo
                      </th>
                      <th scope='col' className='py-3 px-6'>
                        Cantidad
                      </th>
                      <th scope='col' className='py-3 px-6'>
                        Precio unitario
                      </th>
                      <th scope='col' className='py-3 px-6'>
                        Precio total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.orderItems.map((item) => {
                      return (
                        <tr key={item.id} className='bg-white border-b'>
                          <th
                            scope='row'
                            className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'
                          >
                            {item.product.title}
                          </th>
                          <td className='py-4 px-6'>{item.quantity}</td>
                          <td className='py-4 px-6'>${item.product.price}</td>
                          <td className='py-4 px-6'>
                            ${item.product.price * item.quantity}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetail;
