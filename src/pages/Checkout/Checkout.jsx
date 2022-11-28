import NavBar from "../../containers/NavBar/NavBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

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
                <Button width='w-3/12'>Continuar</Button>
              </div>
            </div>
            <div className="w-5/12 flex justify-end">
              <div className="w-4/5 bg-gray-custom rounded p-6">
                <h2>Resumen de compra</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;