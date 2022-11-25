import { Link } from "react-router-dom";

function SearchCard({ product }) {
  return (
    <>
      {/* <Link to={`product/${product.id}`}> */}
      <div className="w-2/3 h-48 flex flex-row mb-5">
        <div className="w-2/4 h-full bg-gray-300">
          <img className="w-full h-full" src={product.imageUrl} alt={product.title} />
        </div>
        <div className="flex flex-col px-5 py-3 w-full items-start">
          <div className="w-full h-1/2">
            <h3>{product.title}</h3>
          </div>
          <h3 className="text-light-purple">{'$' + product.price}</h3>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}

export default SearchCard;