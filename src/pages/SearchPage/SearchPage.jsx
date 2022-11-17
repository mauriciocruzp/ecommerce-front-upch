import NavBar from "../../containers/NavBar/NavBar";
import SearchCard from "../../containers/SearchCard/SearchCard";

function SearchPage() {
  return (
    <>
    <div className="w-full ">
      <div className="w-full">
        <div><h1>Producto buscado</h1></div>
        <div><p></p></div>
      </div>
      <SearchCard />
    </div>
    </>
  );
}

export default SearchPage;