import { Formik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signIn } from '../../api/services/auth';
import LoginSvg from '../../assets/svg/login.svg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import TextError from '../../components/TextError/TextError';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';
import { Link } from 'react-router-dom';

function LogIn() {
  const { setAccessToken, authState } = useAuth();

  useEffect(() => {
    if (authState.accessToken) {
      navigate('/');
    }
  }, []);

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Correo electronico invalido')
      .required('Correo electronico requerido'),
    password: Yup.string().required('Contraseña requerida'),
  });

  async function handleSubmit(values) {
    const response = await signIn(values.email, values.password);

    if (response.status === 200) {
      setAccessToken(response.data.data.accessToken);
      navigate('/');
      return;
    }

    alert('Usuario o contraseña incorrectos');
  }

  return (
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
      }) => (
        <div>
          <div className='h-screen flex justify-between items-center'>
            <div className='w-2/3 h-full grid justify-items-center items-center'>
              <div className='w-2/3'>
                <h1 className='pb-2 text-4xl'>Inicia Sesión</h1>
                <p className='pb-5 text-xl text-gray-400'>
                  Disfruta de las promociones que tenemos especialmente para ti!
                </p>

                <form onSubmit={handleSubmit}>
                  <div className='pb-5'>
                    <Input
                      type='email'
                      name='email'
                      id='email'
                      value={values.email}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      placeholder={'Correo electronico'}
                      className='w-full text-xl'
                    />
                    {errors.email && touched.email && (
                      <TextError>{errors.email}</TextError>
                    )}
                  </div>
                  <div className='pb-5'>
                    <Input
                      type='password'
                      name='password'
                      id='password'
                      value={values.password}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      placeholder={'Contraseña'}
                      className='w-full text-xl'
                    />
                    {errors.password && touched.password && (
                      <TextError>{errors.password}</TextError>
                    )}
                  </div>
                  <div className='pb-5'>
                    <a
                      className='text-gray-400 text-xl'
                      navigate='/register'
                    >
                      ¿No tienes una cuenta?
                      <Link to='/register'> <a className='text-purple-600 text-xl'>Registrate</a></Link>
                    </a>
                  </div>
                  <div
                    className='btn-container'
                    style={{ marginTop: '30px', marginBottom: '20px' }}
                    type='submit'
                  >
                    <Button
                      children={'Enviar'}
                      width='w-full text-xl'
                      type='submit'
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='bg-purple w-2/3 h-full flex flex-col justify-center items-center'>
              <img className='img' src={LoginSvg} alt='homeimg' />
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LogIn;
