import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import OrderSvg from "../../assets/svg/order-bag.svg";

export default function OrderCard({ order }) {
  function getTotal() {
    let total = 0;
    order.orderItems.forEach((item) => {
      total += item.quantity * item.product.price;
    });
    return total;
  }

  function getTotalItems() {
    let total = 0;
    order.orderItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  }

  const status = {
    in_progress: "En progreso",
    delivered: "Entregado",
  };

  return (
    <div className="flex flex-col border-gray-200 border-2 bg-white rounded-lg">
      <div className="flex  rounded-t-lg p-4 border-gray-200 border-b-2 justify-between">
        <p className="text-lg text-black">Pedido #{order.id}</p>
      </div>
      <div className="flex">
        <img src={OrderSvg} className="w-32 h-32 m-4" />
        <div className="flex flex-col justify-center">
          <p className="text-lg text-black">
            Productos comprados: {getTotalItems()}
          </p>
          <p className="text-lg text-black">Dirección: {order.address}</p>
          <p className="text-lg text-black">Total: ${getTotal()}</p>
        </div>
      </div>
      <div className="border-t-2 border-gray-200">
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-col">
            <p className="text-lg text-black">
              Estado:{" "}
              <span className="text-principal-purple font-semibold">
                {status[order.orderStatus.name]}
              </span>
            </p>
          </div>
          <Link to={`/order/${order.id}`}>
            <Button className="bg-principal-purple text-white">
              Ver detalle
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
