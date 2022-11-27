import { useEffect, useState } from "react";
import { getCart } from "../../api/services/cart";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import Spinner from "../../components/Spinner/Spinner";
import NavBar from "../../containers/NavBar/NavBar";

function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getCart();
      setCart(response.data.data.orderItems);
    }
    fetchData();
  }, []);

  function renderCartItems() {
    return cart.map((item) => {
      return <CartItem key={item.id} item={item} />;
    });
  }

  console.log(cart);

  function getPricesByProduct() {
    return cart.map((item) => {
      return <div className="flex justify-between">
        <p className="text-xl text-gray-300">{item.product.title} x {item.quantity}</p>
        <p className="text-xl font-semibold">${item.product.price * item.quantity}</p>
      </div>;
    });
  }

  function getTotalPrice() {
    return cart.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }

  return (
    <>
      <NavBar />
      <div>
        <div className="md:flex gap-2 mx-4  mt-8">
          <div className="w-full md:w-2/3 p-5 col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Carrito de compras</p>
              <p className="text-xl  ">4 articulos</p>
            </div>

            <hr className="bg-gray-300 my-2" />

            {cart ? (
              renderCartItems()
            ) : (
              <div className="w-full flex justify-center">
                <Spinner />
              </div>
            )}
          </div>
          <div className="w-full md:w-1/3 ">
            <div className="bg-white rounded-sm w-full p-6 grid">
              <p className="text-xl font-semibold">Detalles de compra</p>

              <hr className="bg-gray-300 my-2" />

              {cart ? (
                getPricesByProduct()
              ) : (
                <div className="w-full flex justify-center">
                  <Spinner />
                </div>
              )}

              <hr className="bg-gray-300" />

              <div className="flex justify-between mb-4">
                <p className="text-xl ">Total</p>
                <p className="text-xl font-semibold">{cart ? (`$${getTotalPrice()}`) : "No"}</p>
              </div>

              <Button
                children={"Proceder al pago"}
                width="w-full text-xl"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
