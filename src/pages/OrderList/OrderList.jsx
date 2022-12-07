import NavBar from "../../containers/NavBar/NavBar";
import { useEffect, useState } from "react";
import HomeSvg from '../../assets/svg/home.svg';
import ProductSvg from '../../assets/svg/product.svg';
import OrderSvg from '../../assets/svg/order.svg';
import OrderCard from "../../containers/Card/OrderCard";
import {useGetOrderQuery} from '../../api/services/ecommerceApi';
import Spinner from "../../components/Spinner/Spinner";


function OrderList () {

  const {data, isLoading} = useGetOrderQuery()

  function renderOrders() {
    return data.data.map((order) => {
      return <OrderCard key={order.id} order={order} />;
    });
  }

    return(
        <>
        <NavBar />
        <div className="flex bg-white">
          <div className='w-1/5 pl-8 pt-5 flex flex-col gap-4'>
            <h2>Panel de control</h2>
            <ul className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                <img src={HomeSvg} className='w-4' />
                <li>Home</li>
              </div>
              <div className='flex gap-2'>
                <img src={ProductSvg} className='w-4' />
                <li>Productos</li>
              </div>
              <div className='flex gap-2'>
                <img src={OrderSvg} className='w-4' />
                <li>Ordenes</li>
              </div>
            </ul>
          </div>
          {isLoading ? (
            <div className='w-full flex justify-center'>
              <h1>Ordenes</h1>
              <Spinner />
            </div>
          ) : (
            <div className='w-4/5 pl-32 py-4 flex flex-col'>
              <div className='flex flex-col sm:space-y-6'>
                <h1>Ordenes</h1>
                {renderOrders()}
              </div>
            </div>
          )}
          
        </div>
        </>
    );
}

export default OrderList;