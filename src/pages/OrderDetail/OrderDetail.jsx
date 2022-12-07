import { useParams } from 'react-router-dom';
import { useGetOrderByIdQuery } from '../../api/services/ecommerceApi';
import AdminSideBar from '../../components/AdminSideBar/AdminSideBar';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Spinner from '../../components/Spinner/Spinner';
import NavBar from '../../containers/NavBar/NavBar';

const OrderDetail = () => {
  const params = useParams();

  const { data, isLoading } = useGetOrderByIdQuery(params.id);

  function getTotalPrice() {
    return data.data.orderItems.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }

  return (
    <>
      <NavBar />
      <div className='flex'>
        <AdminSideBar />
        <div className='flex flex-col gap-4 px-16 py-8 min-h-screen w-full'>
          <div className='flex justify-between'>
            <h1>Detalle del pedido</h1>
            <div className='flex items-center h-full'>
              <Button>Finalizar orden</Button>
            </div>
          </div>

          {isLoading ? (
            <div className='h-screen flex justify-center pt-10'>
              <Spinner />
            </div>
          ) : (
            <>
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
                  {data.data.orderStatus.name}
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
