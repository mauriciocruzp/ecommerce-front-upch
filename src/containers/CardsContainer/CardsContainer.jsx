import { useEffect, useState } from 'react';
import { getListProduct } from '../../api/services/product';
import Card from '../Card/Card';

function CardsContainer() {
  const [products, setProducts] = useState([]);

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

  return <>{renderProducts()}</>;
}

export default CardsContainer;
