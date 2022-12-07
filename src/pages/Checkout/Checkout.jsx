import NavBar from "../../containers/NavBar/NavBar";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { getCart } from "../../api/services/cart";
import * as yup from 'yup';
import { Formik } from "formik";


function Checkout() {
  const [cart, setCart] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const initialValues = {
    cardNumber: '',
    cardName: '',
    date: '',
    secCode: ''
  };

  const validationSchema = yup.object().shape({
    cardNumber: yup.string().min(18, 'El numero de tarjeta debe tener 18 caracteres').required('Numero de tarjeta es requerido'),
    cardName: yup.string().required('Nombre es requerido'),
    date: yup.date().required('Fecha de vencimiento es requerida'),
    secCode: yup.number().min(3, 'El CVV debe tener 3 caracteres minimo').required('El CVV es requerido')
  });

  async function handleSubmit(values) {
    console.log("2")
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getCart();
      setCart(response.data.data.orderItems);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity;
      });
      setTotalItems(total);

    }
  }, [cart]);

  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.forEach((item) => {
        total += item.quantity * item.product.price;
      });

      setTotalPrice(total);
    }
  }, [cart]);

  return (
    <>
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched
        }) => (
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
                    <form onSubmit={handleSubmit}>
                      <div className="w-full my-10">
                        <Input type='text' placeholder='Número de tarjeta' id='cardNumber' value={values.cardNumber} handleChange={handleChange} handleBlur={handleBlur} />
                        {touched.cardNumber && errors.cardNumber && (
                          <p className='error-text'>{errors.cardNumber}</p>
                        )}
                      </div>
                      <div className="w-full my-10">
                        <Input type='text' placeholder='Nombre y apellido' id='cardName' value={values.cardName} handleChange={handleChange} handleBlur={handleBlur} />
                        {touched.cardName && errors.cardName && (
                          <p className='error-text'>{errors.cardName}</p>
                        )}
                      </div>
                      <div className="w-full flex flex-row">
                        <div className="w-1/2 mr-8">
                          <Input type='text' placeholder='Fecha de vencimiento' id='date' value={values.date} handleChange={handleChange} handleBlur={handleBlur} />
                          {touched.date && errors.date && (
                            <p className='error-text'>{errors.date}</p>
                          )}
                        </div>
                        <div className="w-2/">
                          <Input type='text' placeholder='Código de seguridad' id='secCode' value={values.secCode} handleChange={handleChange} handleBlur={handleBlur} />
                          {touched.secCode && errors.secCode && (
                            <p className='error-text'>{errors.secCode}</p>
                          )}
                        </div>
                      </div>
                      <div className="w-full mt-14 flex justify-end">
                        <Button width='w-3/12' type="submit">Pagar</Button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="w-5/12 flex justify-end">
                  <div className="w-4/5 bg-white rounded p-6">
                    <p className="text-xl font-semibold">Resumen de compra</p>
                    <hr className="bg-gray-300 my-2" />
                    <div className="w-full flex justify-center flex-col">
                      <p className="text-xl text-gray-400 text-center my-10">Subtotal ({totalItems} Articulos): <span className="font-semibold text-black">${totalPrice}</span></p>
                      <hr className="bg-gray-300 my-2" />
                      <p className="text-xl text-gray-400 text-center my-10">Total : <span className="font-semibold text-black">${totalPrice}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Checkout;