function SearchCard(props) {
  return (
    <div className="w-2/3 h-44 flex flex-row">
      <div className="w-1/3 h-full bg-gray-300">
        <img className="w-full h-full" src={props.img} alt="" />
      </div>
      <div className="flex flex-col p-3 w-full items-start">
        <div className="w-full h-1/2">
          <h2>Nombre del producto</h2>
        </div>
          <h3 className="text-violet-500">$23,000.00</h3>
      </div>
    </div>
  );
}

export default SearchCard;