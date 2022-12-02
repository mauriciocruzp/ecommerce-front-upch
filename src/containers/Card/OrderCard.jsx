import React from "react";
import {useEffect, useState} from "react";
import Button from "../../components/Button/Button";

const OrderCard = ({}) => {

  const isAuthenticated = false;

  const username = "user 0"

  return(
    <div className="flex flex-row bg-gray-300 rounded-md pl-2 px-3 py-1">
      <div className="flex justify-center m-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="108" fill="purple" class="bi bi-bag-fill" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
        </svg>
      </div>
      <div>
        <h2>Orden no. # - <span>Por {isAuthenticated ? " " + username : ""}</span> </h2>
        <p>Comprado el <b>dd/mm/aaaa</b></p>
        <p>Productos adquiridos: <b>####</b></p>
        <p>Estado: <b>Status</b></p>
        <p>Total: <b>$####</b></p>
      </div>
      <div className=" flex flex-col justify-end">
        <Button className="" >Detalles</Button>
      </div>
    </div>
  );
}

export default OrderCard;