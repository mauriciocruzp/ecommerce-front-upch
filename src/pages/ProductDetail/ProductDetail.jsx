import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/services/product';
import Button from '../../components/Button/Button';
import NavBar from '../../containers/NavBar/NavBar';

function ProductDetail() {
  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getProductById(params.id);
      console.log(response);
      setProduct(response.data.data);
    }
    fetchData();
  }, []);

  return (
    <div className='h-screen' >
      <NavBar />
      <div className='w-full h-5/6 flex justify-center items-center'>
        <div className='bg-white w-10/12 h-5/6 shadow-md flex gap-10 p-16'>
          <div className='w-1/2'>
            <img src={product.imageUrl} />
          </div>
          <div className='w-1/2 flex flex-col gap-20 justify-center'>
            <div className='flex gap-8'>
              <h1 className='text-2xl font-semibold'>{product.title}</h1>
              <p className='text-lg font-medium'>${product.price}</p>
            </div>
            <div>
              <p>{product.description}</p>
            </div>
            <div className='flex justify-between'>
              <input
                type='number'
                name='quantity'
                defaultValue={1}
                min={1}
                className='bg-input-purple w-20 rounded-md px-4 py-1'
              />
              <button className='bg-principal-purple text-white rounded-md px-4 py-2 text-sm'>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
