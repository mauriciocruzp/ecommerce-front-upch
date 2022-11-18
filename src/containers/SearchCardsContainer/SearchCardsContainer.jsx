import { useEffect, useState } from 'react';
import SearchCard from '../SearchCard/SearchCard';


function SearchCardsContainer() {
  // const [products, setProducts] = useState([]);

  const products = [
    {
      'title': 'Asus ROG STRIX i5 12Gb RAM',
      'imgUrl': '',
      'price': '23,999',
      'id': 3
    }
  ]

  function renderProducts() {
    return products.map((product) => {
      return <SearchCard key={product.id} product={product} />
    })
  }

  return <>{renderProducts()}</>
}

export default SearchCardsContainer;