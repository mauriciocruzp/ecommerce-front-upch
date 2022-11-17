import NavBar from "../../containers/NavBar/NavBar";
import SearchCard from "../../containers/SearchCard/SearchCard";

function SearchPage() {
  return (
    <>
      <div className="w-full ">
        <div className="w-full mt-6 pl-8">
          <div><h2>Producto buscado</h2></div>
          <div><p>34 resultados</p></div>
        </div>
        <div className="w-full flex justify-center">
          <div className="w-3/4 bg-white p-5 rounded mt-9 flex flex-col">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;