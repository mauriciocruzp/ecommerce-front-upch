import React from "react";
import {useEffect, useState} from "react";
import Button from "../../components/Button/Button";
import {Link, useNavigate} from "react-router-dom";


const OrderCard = ({order}) => {

  const navigate = useNavigate();



  return(
    <div className="flex flex-row bg-gray-300 rounded-md pl-2 px-3 py-1">
      <div className="flex justify-center m-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="108" fill="purple" class="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
        </svg>
      </div>
      <div>
        <Link to={`/order/${order.id}`}>
          <h2>Orden no. # - <span>Por ${order.products.user.firstName} </span> </h2>
        </Link>
        <Link>
          <p>Comprado el <b> #### </b></p>
        </Link>
        <Link to={`order/${order.id}`}>
          <p>Productos adquiridos: <b>${data.data.products.length}</b></p>
        </Link>
        <Link to={`/order/${order.id}`}>
          <p>Estado: <b> ${order.orderStatus} </b></p>
        </Link>
        <Link>
          <p>Total: <b>$####</b></p>
        </Link>
      </div>
      <div className=" flex flex-col justify-end">
          <Button onClickHandler={ navigate(`/home`)}>Detalles</Button>
      </div>
    </div>
  );
}

export default OrderCard;