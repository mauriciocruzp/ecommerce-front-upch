import NavBar from "../../containers/NavBar/NavBar";
import OrderCard from "../../components/OrderCard/OrderCard";
import { useGetOrdersByUserIdQuery } from "../../api/services/ecommerceApi.js";
import Spinner from "../../components/Spinner/Spinner";

export default function OrderListUser() {

  const { data, isLoading } = useGetOrdersByUserIdQuery();

  function renderOrders() {
    return data.data.map((order) => {
      return <OrderCard key={order.id} order={order} />;
    });
  }
  return (
    <>
      <NavBar />
      <div className="mx-4 pt-5 pl-5 mt-4">
        <p className="text-2xl font-semibold">Mis pedidos</p>
      </div>

      <hr className="bg-gray-300 mx-6" />

      {data ? (
        isLoading ? (
          <div className="w-full flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div className="flex flex-col gap-4 mx-40 mt-4">{renderOrders()}</div>
        )
      ) : isLoading ? (
        <div className="w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <p>No hay pedidos</p>
        </div>
      )}

      <div className="flex flex-col gap-4 mx-40 mt-4"></div>
    </>
  );
}