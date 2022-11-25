import HomeBanner from '../../components/Banner/HomeBanner.jsx';
import NavBar from '../../containers/NavBar/NavBar';
import { useEffect, useState } from 'react';
import { getListProduct } from '../../api/services/product';
import Card from '../../containers/Card/Card.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getListProduct();
      setProducts(response.data.data);
    }
    fetchData();
  }, []);

  function renderProducts() {
    return products.map((product) => {
      return <Card key={product.id} product={product} />;
    });
  }

  return (
    <>
      <NavBar />
      <HomeBanner />
      <div className='mt-8 mx-10'>
        <h2>Ultimos vistos</h2>
        {products ? (
          <div className='w-full flex mt-5 gap-8'>{renderProducts()}</div>
        ) : (
          <div className='w-full flex justify-center'>
            <Spinner />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
