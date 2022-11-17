import NavBar from "../NavBar/NavBar";

function SearchCard(props) {
  return (
    <>
      <div className="w-2/3 h-44 flex flex-row mb-5">
        <div className="w-2/4 h-full bg-gray-300">
          <img className="w-full h-full" src={props.img} alt="" />
        </div>
        <div className="flex flex-col px-5 py-3 w-full items-start">
          <div className="w-full h-1/2">
            <h3>Nombre del producto</h3>
          </div>
          <h3 className="text-light-purple">$23,000.00</h3>
        </div>
      </div>
    </>
  );
}

export default SearchCard;