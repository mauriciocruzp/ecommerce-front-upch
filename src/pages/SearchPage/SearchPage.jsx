import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchByKeyword } from '../../api/services/product';
import SearchCard from "../../containers/SearchCard/SearchCard";
import Spinner from "../../components/Spinner/Spinner";
import NavBar from '../../containers/NavBar/NavBar';
import { useSelector } from 'react-redux';

function SearchPage() {
  const [products, setProducts] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const keywordFromStore = useSelector(state => state.keyword.value);

  useEffect(() => {
    async function fetchData() {
      const response = await searchByKeyword(keyword);
      console.log(response.data.data)
      setProducts(response.data.data);
    }
    fetchData();
  }, [keywordFromStore]);

  function renderProducts() {
    return products.map((product) => {
      return <SearchCard key={product.id} product={product} />;
    });
  }

  return (
    <>
      <div className="h-screen">
        <NavBar />
        <div className="w-full h-full">
          {products ?
            (<>
              <div className="w-full mt-6 pl-8">
                <div><h2>Producto buscado</h2></div>
                <div><p>{products.length} resultados</p></div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-3/4 bg-white p-5 rounded mt-9 flex flex-col">
                  {products ? (renderProducts()) : (<div className='w-full flex justify-center'>
                    <Spinner />
                  </div>)}
                </div>
              </div>
            </>) : (<div className='w-full flex justify-center'>
                    <Spinner /> </div>)
          }
        </div>
      </div>
    </>
  );
}

export default SearchPage;