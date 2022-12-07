import { useEffect, useState } from "react";
import { getCart } from "../../api/services/cart";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import Spinner from "../../components/Spinner/Spinner";
import NavBar from "../../containers/NavBar/NavBar";
import CartContext from "../../context/CartContext";
import { update } from "../../reducers/cartReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getCart();
      setCart(response.data.data.orderItems);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (cart) {
      let totalItemss = 0;
      cart.forEach((item) => {
        totalItemss += item.quantity;
      });
      let totalPrices = 0;
      cart.forEach((item) => {
        totalPrices += item.quantity * item.product.price;
      });
      setTotalPrice(totalPrices);
      setTotalItems(totalItemss);
      dispatch(update({ totalItems: totalItemss, totalPrice: totalPrices }));
    }
  }, [cart]);

  function renderCartItems() {
    return cart.map((item) => {
      return <CartItem key={item.id} item={item} />;
    });
  }

  return (
    <>
      <NavBar />
      <CartContext.Provider
        value={
          cart ? { totalItems, setTotalItems, totalPrice, setTotalPrice } : 0
        }
      >
        <div>
          <div className="md:flex gap-2 mx-4  mt-8">
            <div className="w-full md:w-2/3 p-5 col-span-2">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-semibold">Carrito de compras</p>
                <p className="text-xl  ">{cart ? totalItems : "0"} Articulos</p>
              </div>

              <hr className="bg-gray-300 my-2" />

              {cart && totalItems > 0 ? (
                isLoading ? (
                  <div className="w-full flex justify-center items-center">
                    <Spinner />
                  </div>
                ) : (
                  renderCartItems()
                )
              ) : isLoading ? (
                <div className="w-full flex justify-center items-center">
                  <Spinner />
                </div>
              ) : (
                <div className="w-full flex justify-center items-center">
                  <p className="text-xl text-gray-400">
                    No hay productos para mostrar.
                  </p>
                </div>
              )}
            </div>

            <div className="w-full md:w-1/3 ">
              <div className="bg-white rounded-sm w-full p-6 grid">
                <p className="text-xl font-semibold">Detalles de compra</p>

                <hr className="bg-gray-300" />

                {cart || totalItems < 0 ? (
                  <div className="w-full flex justify-center">
                    <p className="text-xl text-gray-400 text-center my-10">
                      Subtotal ({totalItems} Articulos):{" "}
                      <span className="font-semibold text-black">
                        ${totalPrice}
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="w-full flex justify-center">
                    <p className="text-xl text-gray-400 text-center my-10">
                      Tu carrito de compras esta vacio
                    </p>
                  </div>
                )}

                <hr className="bg-gray-300" />

                {cart ? (
                  <Button
                    onClickHandler={() => navigate("/checkout")}
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
