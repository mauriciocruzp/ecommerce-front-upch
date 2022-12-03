import NavBar from "../../containers/NavBar/NavBar";
import { useEffect, useState } from "react";
// import HomeSvg from '../../assets/svg/home.svg';
// import ProductSvg from '../../assets/svg/product.svg';
// import OrderSvg from '../../assets/svg/order.svg';
import OrderCard from "../../containers/Card/OrderCard";


function OrderList () {
    return(
        <>
        <NavBar />
        <div className="flex bg-white">
          <div className='w-1/5 pl-8 pt-5 flex flex-col gap-4'>
            <h2>Panel de control</h2>
            <ul className='flex flex-col gap-4'>
              <div className='flex gap-2'>
                {/* <img src={HomeSvg} className='w-4' /> */}
                <li>Home</li>
              </div>
              <div className='flex gap-2'>
                {/* <img src={ProductSvg} className='w-4' /> */}
                <li>Productos</li>
              </div>
              <div className='flex gap-2'>
                {/* <img src={OrderSvg} className='w-4' /> */}
                <li>Ordenes</li>
              </div>
            </ul>
          </div>
          <div className='w-4/5 pl-32 py-4 flex flex-col'>
            <div className='flex flex-col sm:space-y-6'>
              <h1>Ordenes</h1>
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          </div>
        </div>
        </>
    );
}

export default OrderList;