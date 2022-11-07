import { Formik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signIn } from '../../api/services/auth';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

function LogIn() {

  const { setAccessToken, authState } = useAuth();

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Correo electronico invalido')
      .required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });

  async function handleSubmit(values) {
    const response = await signIn(values.email, values.password);

    if (response.status === 200) {
      setAccessToken(response.data.data.accessToken);
      alert('Inicio de sesion exitoso');
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
        <div className='log-in'>
          <div className='w-container'>
            <div className='head'>
              <h1>Ecommerce UPCH</h1>
              <h2>Inicia sesión</h2>
            </div>
            <div className='form-login-container'>
              <form onSubmit={handleSubmit}>
                <div>
                  <Input
                    id='email'
                    text='Correo electronico'
                    type='email'
                    value={values.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <p className='error-text'>{errors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    id='password'
                    text='Contraseña'
                    type='password'
                    value={values.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <p className='error-text'>{errors.password}</p>
                  )}
                </div>
                <div
                  className='btn-container'
                  style={{ marginTop: '30px', marginBottom: '20px' }}
                  type='submit'
                >
                  <Button
                    classNameButton='primary-button'
                    text='Iniciar sesión'
                    width='278px'
                    type='submit'
                  />
                </div>
              </form>
            </div>
            <div className='forgot'>
              <a href='#'>Olvidé mi contraseña</a>
            </div>
            <div className='have'>
              <p style={{ marginRight: '5px' }}>¿No tienes cuenta?</p>
              <a href='#'>Crear una cuenta</a>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LogIn;
