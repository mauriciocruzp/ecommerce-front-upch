import ImgSvg from '../../assets/svg/img.svg';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createProduct } from '../../api/services/product';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Input/Textarea';
import NavBar from '../../containers/NavBar/NavBar';
import HomeSvg from '../../assets/svg/home.svg';
import ProductSvg from '../../assets/svg/product.svg';
import OrderSvg from '../../assets/svg/order.svg';
import { useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import { uploadFile } from '../../api/services/file';
import TextError from '../../components/TextError/TextError';
import {
  useGetCategoriesQuery,
  useGetProductStatusQuery,
} from '../../api/services/ecommerceApi';

const CreateProductForm = () => {

  const [filename, setFilename] = useState(null);

  const { data: categoryResponse, isLoading: isLoadingCategory } =
    useGetCategoriesQuery();

  const { data: productStatusResponse, isLoading: isLoadingProductStatus } =
    useGetProductStatusQuery();

  const navigate = useNavigate();

  const initialValues = {
    title: '',
    description: '',
    image: '',
    stock: '',
    price: '',
    categoryIds: [],
    productStatusId: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Titulo requerido'),
    description: Yup.string().required('Descripción requerida'),
    image: Yup.string().required('Imagen requerida'),
    stock: Yup.string().required('Cantidad de inventario requerida'),
    price: Yup.string().required('Precio requerido'),
    categoryIds: Yup.array().min(1, 'Debe seleccionar al menos una categoría'),
  });

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append('file', values.image);

    const fileResponse = await uploadFile(formData);

    if (fileResponse.status !== 201) return alert('Error al subir la imagen');

    const response = await createProduct(
      values.title,
      values.description,
      values.price,
      values.stock,
      fileResponse.data.data.url,
      values.categoryIds
    );

    if (response.status === 201) {
      alert('Producto creado exitosamente');
      navigate('/');
      return;
    }
  };

  const renderCategories = () =>
    categoryResponse.data.map((category) => (
      <option key={category.id} value={category.id}>
        {capitalizeFirstLetter(category.name)}
      </option>
    ));

  const renderProductStatus = () =>
    productStatusResponse.data.map((productStatus) => (
      <option key={productStatus.id} value={productStatus.id}>
        {capitalizeFirstLetter(productStatus.name)}
      </option>
    ));
  return (
    <>
      <NavBar />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
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
              <h1>Agregar producto nuevo</h1>
              <form onSubmit={handleSubmit}>
                <div className='w-2/3 flex flex-col gap-10 mt-5'>
                  <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                      <label>Titulo:</label>
                      <Input
                        type='text'
                        value={values.title}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        placeholder='Microfono Shure'
                        name='title'
                      />
                      {errors.title && touched.title && (
                        <TextError>{errors.title}</TextError>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>Description:</label>
                      <Textarea
                        value={values.description}
                        name='description'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        placeholder='Microfono de alta calidad...'
                      ></Textarea>
                      {errors.description && touched.description && (
                        <TextError>{errors.description}</TextError>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>Precio:</label>
                      <Input
                        type='number'
                        value={values.price}
                        name='price'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        placeholder='$1,000'
                      />
                      {errors.price && touched.price && (
                        <TextError>{errors.price}</TextError>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>Cantidad de inventario:</label>
                      <Input
                        type='number'
                        value={values.stock}
                        name='stock'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        placeholder='3'
                      />
                      {errors.stock && touched.stock && (
                        <TextError>{errors.stock}</TextError>
                      )}
                    </div>

                    <div className='flex flex-col gap-2'>
                      <label>Category:</label>
                      {isLoadingCategory ? (
                        <Spinner />
                      ) : (
                        <select
                          value={values.categoryIds}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          multiple
                          name='categoryIds'
                          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-principal-purple block w-full p-2.5'
                        >
                          {renderCategories()}
                        </select>
                      )}
                      {errors.categoryIds && touched.categoryIds && (
                        <TextError>{errors.categoryIds}</TextError>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>Imagen del producto:</label>

                      <div className='flex w-fit'>
                        <label
                          htmlFor='dropzone-file'
                          className='flex flex-col items-center justify-center w-full px-6 py-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-purple-100'
                        >
                          <div className='flex items-center justify-center gap-6'>
                            <img src={ImgSvg} />
                            <div className='flex flex-col'>
                              <p className='text-sm font-semibold text-gray-500 dark:text-gray-400'>
                                Sube una imagen
                              </p>
                              {!filename ? (
                                <p className='text-xs text-gray-500 dark:text-gray-400'>
                                  seleccionala o arrastrala
                                </p>
                              ) : (
                                <p className='text-xs text-gray-500 dark:text-gray-400'>
                                  {filename}
                                </p>
                              )}
                            </div>
                          </div>
                          <input
                            id='dropzone-file'
                            name='image'
                            type='file'
                            className='hidden'
                            onChange={(event) => {
                              setFieldValue(
                                'image',
                                event.currentTarget.files[0]
                              );
                              setFilename(event.currentTarget.files[0].name);
                            }}
                            onBlur={handleBlur}
                          />
                        </label>
                      </div>
                      {errors.image && touched.image && (
                        <TextError>{errors.image}</TextError>
                      )}
                    </div>
                    <div className='flex flex-col gap-2'>
                      <label>Estado de la publicación:</label>
                      {isLoadingProductStatus ? (
                        <Spinner />
                      ) : (
                        <>
                          <select
                            name='productStatusId'
                            value={values.productStatusId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-principal-purple block w-full p-2.5'
                          >
                            {renderProductStatus()}
                          </select>
                        </>
                      )}
                      {errors.productStatusId && touched.productStatusId && (
                        <TextError>{errors.productStatusId}</TextError>
                      )}
                    </div>
                  </div>
                  <div>
                    <Button type='submit'>Enviar</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
export default CreateProductForm;
