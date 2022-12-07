import Input from "../../components/Input/Input";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { updateCart, deleteCartItem } from "../../api/services/cart";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [visible, setVisible] = useState(true);
  const { totalItems, setTotalItems, totalPrice, setTotalPrice } = useContext(CartContext);


  const maxQuantity = item.product.stock;

  async function handleQuantityChange(e) {
    const value = e.target.value;

    if (value > maxQuantity || value < 1) {
      e.target.className = "bg-gray-50 w-full rounded-md px-3 py-1 placeholder-gray-400 focus:outline-none focus:outline-pink-500";
      return;
    }

    if(value < 1) {
      e.target.className = "bg-gray-50 w-full rounded-md px-3 py-1 placeholder-gray-400 focus:outline-none focus:outline-pink-500";
      return;
    }

    setTotalItems(totalItems - quantity + parseInt(value));
    setTotalPrice(totalPrice - quantity * item.product.price + parseInt(value) * item.product.price);
    setQuantity(parseInt(value));
  
    const response = await updateCart(item.id, value);
    console.log(response);

    if (response.status === 200) {
      console.log("ok");
    }
    
    e.target.className = "bg-gray-50 w-full rounded-md px-3 py-1 placeholder-gray-400 focus:outline-none focus:outline-principal-purple";
    console.log(value);
  }

  function getCategories() {
    return item.product.productCategories.map((category) => {
      return category.category.name;
    });
  }

  function handleDelete() {
    setVisible((prev) => !prev)
    setTotalItems(totalItems - quantity);
    setTotalPrice(totalPrice - quantity * item.product.price);
    deleteCartItem(item.id)
  }

  return (
    <>
      {visible && (
      <div className="h-32 flex justify-around items-center w-full border-b-2 rounded-sm my-2">
        <div className="flex items-center gap-5 w-4/12">
          <img src={item.product.imageUrl} className="w-20 " />
          <div className="flex flex-col">
            <p className="text-xl ">{item.product.title}</p>
            <p className="text-gray-400 text-lg">{getCategories()[0]}</p>
          </div>
        </div>

        <div className="md:w-20 w-10">
          <Input
            value={quantity}
            handleChange={(e) => {handleQuantityChange(e)}}
            type="number"
            name="quantity"
            id="quantity"
            placeholder="Cantidad"
            className="text-xl"
          />
        </div>

        <div className="items-center">
          <p className="text-xl">{`$${item.product.price}`}</p>
        </div>

        <div className="w-20 flex justify-center">
          <button onClick={()=>handleDelete()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
      )}
    </>
  );
}

export default CartItem;
