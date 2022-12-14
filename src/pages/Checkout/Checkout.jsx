import NavBar from "../../containers/NavBar/NavBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';


function Checkout() {

  return (
    <>
      <div className="h-screen">
        <NavBar />
        <div className="max-w-screen-xl m-auto flex flex-col">
          <div className="w-full mt-3"><h2>Detalles de pedido</h2></div>
          <div className="w-full flex flex-row">
            <div className="w-7/12 flex flex-col">
              <div className="w-full">
                <div className="w-full mt-5 h-24 bg-gray-custom rounded">f</div>
              </div>
              <div className="w-10/12 mt-20">
                <h2>Método de pago</h2>
                <form action="">
                  <div className="w-full my-10">
                    <Input type='text' className='w-full' placeholder='Número de tarjeta' id='card_number' name='card_number' value="" handleChange='' handleBlur='' />
                  </div>
                  <div className="w-full my-10">
                    <Input type='text' placeholder='Nombre y apellido' id='name_lastname' name='name_lastname' value="" handleChange='' handleBlur='' />
                  </div>
                  <div className="w-full flex flex-row">
                    <div className="w-1/2 mr-8">
                      <Input type='text' placeholder='Fecha de vencimiento' id='date' name='date' value="" handleChange='' handleBlur='' />
                    </div>
                    <div className="w-2/">
                      <Input type='text' placeholder='Código de seguridad' id='security_code' name='security_code' value="" handleChange='' handleBlur='' />
                    </div>
                  </div>
                </form>
              </div>
              <div className="w-full mt-14 flex justify-end">
                <Button width='w-3/12'>Pagar</Button>
              </div>
            </div>
            <div className="w-5/12 flex justify-end">
              <div className="w-4/5 bg-white rounded p-6">
                <p className="text-xl font-semibold">Resumen de compra</p>
                <hr className="bg-gray-300 my-2" />
                <div className="w-full flex justify-center flex-col">
                  <p className="text-xl text-gray-400 text-center my-10">Subtotal ({3} Articulos): <span className="font-semibold text-black">${8}</span></p>
                  <hr className="bg-gray-300 my-2" />
                  <p className="text-xl text-gray-400 text-center my-10">Total : <span className="font-semibold text-black">${8}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;