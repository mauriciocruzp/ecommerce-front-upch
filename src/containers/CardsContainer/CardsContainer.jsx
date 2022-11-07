import { useEffect } from 'react';
import { getListProduct } from '../../api/services/product';
import Card from '../Card/Card';
import { useState } from 'react';

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
      return <Card product={product} />;
    });
  }

  return <>{renderProducts()}</>;
}

export default CardsContainer;
