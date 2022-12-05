import { useEffect, useState } from "react";
import { getCart } from "../../api/services/cart";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import NavBar from "../../containers/NavBar/NavBar";
import CartContext from "../../context/CartContext";

function Cart() {
  const [cart, setCart] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await getCart();
      setCart(response.data.data.orderItems);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity;
      });
      setTotalItems(total);
    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity * item.product.price;
      });
      setTotalPrice(total);
    }
  }, [cart]);


  function renderCartItems() {
    return cart.map((item) => {
      return <CartItem key={item.id} item={item} />;
    });
  }

  console.log(cart);



  return (
    <>
      <NavBar />
      <CartContext.Provider value={cart ? {totalItems, setTotalItems, totalPrice, setTotalPrice} : 0}>
      <div>
        <div className="md:flex gap-2 mx-4  mt-8">
          <div className="w-full md:w-2/3 p-5 col-span-2">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">Carrito de compras</p>
              <p className="text-xl  ">{cart ? totalItems : "0"} Articulos</p>
            </div>

            <hr className="bg-gray-300 my-2" />

            {cart || totalItems < 0 ? (
              renderCartItems()
            ) : (
              <div className="w-full flex justify-center items-center">
                <p className="text-xl text-gray-400">No hay productos para mostrar.</p>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/3 ">
            <div className="bg-white rounded-sm w-full p-6 grid">
              <p className="text-xl font-semibold">Detalles de compra</p>

              <hr className="bg-gray-300 my-2" />

              {cart || totalItems < 0 ? (
                <div className="w-full flex justify-center">
                <p className="text-xl text-gray-400 text-center my-10">Subtotal ({totalItems} Articulos): <span className="font-semibold text-black">${totalPrice}</span></p>
              </div>
              ) : (
                <div className="w-full flex justify-center">
                  <p className="text-xl text-gray-400 text-center my-10">Tu carrito de compras esta vacio</p>
                </div>
              )}

              <hr className="bg-gray-300" />

              {cart ? (
                <Button
                children={"Proceder al pago"}
                width="w-full text-xl"
                type="submit"
              />
              ) : (
                ""
              )}

              
            </div>
          </div>
        </div>
      </div>
      </CartContext.Provider>
    </>
  );
}

export default Cart;
