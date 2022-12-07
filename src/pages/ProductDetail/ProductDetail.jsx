import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../api/services/ecommerceApi";
import { getProductById } from "../../api/services/product";
import Button from "../../components/Button/Button";
import { addToCart } from "../../api/services/cart";
import Spinner from "../../components/Spinner/Spinner";
import NavBar from "../../containers/NavBar/NavBar";
import Input from "../../components/Input/Input";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const params = useParams();

  const navigator = useNavigate();

  const {
    data: response,
    isLoading,
    error,
  } = useGetProductByIdQuery(params.id);

  const maxQuantity = response?.data.stock;

  const handleAddToCart = async (quantity) => {
    const response = await addToCart(params.id, quantity);

    if (response.status === 201) {
      console.log("Producto agregado al carrito");
    }
  };

  useEffect(() => {
    if (error?.status === 404) {
      navigator("/");
    }
  }, [error]);

  return (
    <div className="h-screen">
      <NavBar />
      <div className="w-full h-5/6 flex justify-center items-center">
        <div className="bg-white w-10/12 h-5/6 shadow-md flex justify-center items-center gap-10 p-16">
          {isLoading || error ? (
            <Spinner />
          ) : (
            <>
              <div className="w-1/2">
                <img src={response.data.imageUrl} />
              </div>
              <div className="w-1/2 flex flex-col gap-20 justify-center">
                <div className="flex gap-8">
                  <h1 className="text-2xl font-semibold">
                    {response.data.title}
                  </h1>
                  <p className="text-lg font-medium">${response.data.price}</p>
                </div>
                <div>
                  <p>{response.data.description}</p>
                </div>
                <div className="flex justify-between">
                    <input 
                      type="number"
                      name="quantity"
                      min="1"
                      max={maxQuantity}
                      defaultValue={1}
                      onChange={(e) => handleQuantityChange(e)}
                      className="bg-gray-50 focus:outline-none focus:outline-principal-purple w-20 rounded-md px-4 py-1"
                    />
                  <button
                    className="bg-principal-purple text-white rounded-md px-4 py-2 text-sm"
                    onClick={() =>
                      handleAddToCart(
                        document.getElementsByName("quantity")[0].value
                      )
                    }
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
