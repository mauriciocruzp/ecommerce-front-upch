import Input from "../../components/Input/Input";

function CartItem({ item }) {

  function getCategories(id) {
    return item.product.productCategories.map((category) => {
      return category.category.name;
})};

  return (
    <>
      <div className="h-32 flex justify-around items-center w-full border-b-2 rounded-sm my-2">
        <div className="flex items-center gap-5 w-4/12">
          <img src={item.product.imageUrl} className="w-20 " />
          <div className="flex flex-col">
            <p className="text-xl">{item.product.title}</p>
            <p className="text-gray-400 text-lg">{getCategories()[0]}</p>
          </div>
        </div>

        <div className="w-20">
          <Input
            type="number"
            name="quantity"
            id="quantity"
            placeholder={item.quantity}
            className="text-xl"
          />
        </div>

        <div className="items-center">
          <p className="text-xl">{`$${item.product.price}`}</p>
        </div>

        <div className="w-20 flex justify-center">
          <button>
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
    </>
  );
}

export default CartItem;
