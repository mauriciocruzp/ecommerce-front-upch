import HomeBanner from '../../components/Banner/HomeBanner.jsx';
import NavBar from '../../containers/NavBar/NavBar';
import Card from '../../containers/Card/Card.jsx';
import Spinner from '../../components/Spinner/Spinner.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useGetProductsQuery } from '../../api/services/ecommerceApi.js';

function Home() {
  const { data, isLoading, isError } = useGetProductsQuery();

  function renderProducts() {
    return data.data.map((product) => {
      return <Card key={product.id} product={product} />;
    });
  }

  return (
    <>
      <NavBar />
      <HomeBanner />
      <div className='mt-8 mb-20 mx-10'>
        <h2>Ultimos vistos</h2>
        {isLoading || isError ? (
          <div className='w-full flex justify-center'>
            <Spinner />
          </div>
        ) : (
          <div className='w-full flex flex-wrap justify-between mt-5 gap-8'>
            {renderProducts()}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Home;
