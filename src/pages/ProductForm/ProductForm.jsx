import ImgSvg from '../../assets/svg/img.svg';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createProduct } from '../../api/services/product';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import NewProductInput from '../../components/Input/NewProductInput';
import Textarea from '../../components/Input/Textarea';
import NavBar from '../../containers/NavBar/NavBar';
import useAuth from '../../hooks/useAuth';
import HomeSvg from '../../assets/svg/home.svg';
import ProductSvg from '../../assets/svg/product.svg';
import OrderSvg from '../../assets/svg/order.svg';

function ProductForm() {
  const { authState } = useAuth();
  // const { axiosInstance } = useAxiosPrivate();
  useEffect(() => {
    console.log(authState.accessToken);
  }, []);

  const navigate = useNavigate();

  const initialValues = {
    title: '',
    description: '',
    image: null,
    stock: '',
    price: '',
    categoryIds: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Campo requerido'),
    description: Yup.string().required('Campo requerido'),
    image: Yup.string().required('Campo requerido'),
    stock: Yup.string().required('Campo requerido'),
    price: Yup.string().required('Campo requerido'),
    categoryIds: Yup.string().required('Campo requerido'),
  });

  async function handleSubmit(values) {
    values.categoryIds = 1;

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('image', values.image);
    formData.append('stock', values.stock);
    formData.append('price', values.price);
    formData.append('categoryIds', values.categoryIds);

    console.log(values);

    const response = await createProduct(formData);

    if (response.status === 201) {
      alert('Producto creado exitosamente');
      navigate('/');
      return;
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <div className='flex flex-col h-screen'>
          <NavBar />
          <div className='flex'>
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
            <div className='w-4/5 pl-32 py-5 bg-white'>
              <div className='w-2/3 flex flex-col gap-10'>
                <h1>Agregar producto nuevo</h1>
                <div className='flex flex-col gap-8'>
                  <div className='flex flex-col gap-2'>
                    <label>Titulo:</label>
                    <Input type='text' placeholder='Microfono Shure' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Description:</label>
                    <Textarea placeholder='Microfono de alta calidad...'></Textarea>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Precio:</label>
                    <Input type='number' placeholder='$1,000' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Cantidad de inventario:</label>
                    <Input type='number' placeholder='3' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Category:</label>
                    <select
                      multiple
                      id='countries_multiple'
                      class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-principal-purple block w-full p-2.5'
                    >
                      <option selected>Choose countries</option>
                      <option value='US'>United States</option>
                      <option value='CA'>Canada</option>
                      <option value='FR'>France</option>
                      <option value='DE'>Germany</option>
                    </select>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label>Imagen del producto:</label>

                    <div class='flex w-2/5'>
                      <label
                        for='dropzone-file'
                        class='flex flex-col items-center justify-center w-full px-6 py-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-purple-100'
                      >
                        <div class='flex items-center justify-center gap-6'>
                          <img src={ImgSvg} />
                          <div className='flex flex-col'>
                            <p class='text-sm font-semibold text-gray-500 dark:text-gray-400'>
                              Sube una imagen
                            </p>
                            <p class='text-xs text-gray-500 dark:text-gray-400'>
                              Seleccionala o arrastrala
                            </p>
                          </div>
                        </div>
                        <input id='dropzone-file' type='file' class='hidden' />
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <Button>Enviar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
export default ProductForm;
