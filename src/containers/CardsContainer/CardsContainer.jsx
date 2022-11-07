import Products from '../../assets/Products.json';
import Card from '../Card/Card';

function CardsContainer() {
    console.table(Products.products)
    return (
        Products.products.map((product) => {
            return (
            <Card productName={product.productName} linkImage={product.linkImage} price={product.price} onClick={console.log(null)} /> )
        })
    );
}

export default CardsContainer;