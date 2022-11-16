import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './SignUp.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import { createUser } from '../../api/services/user';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();


  const initialValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required('Nombre es requerido'),
    lastName: yup.string().required('Apellido es requerido'),
    email: yup
      .string()
      .email('Correo electronico invalido')
      .required('Correo electronico es requerido'),
    password: yup
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('Contraseña es requerida'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required('Confirmar contraseña es requerido'),
    dateOfBirth: yup.date().required('Fecha de nacimiento es requerida'),
  });

  async function hadleSubmit(values) {
    console.debug("antes");
    const response = await createUser(values.email, values.password, values.firstName, values.lastName, values.dateOfBirth);

    if (response.status == 201) {
      alert('Usuario creado');
      navigate('/login');
      return
    }

    alert(response.data.message);
    return
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={hadleSubmit}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
      }) => (
        <div className='sign-up'>
          <div className='su-container'>
            <div className='su-head'>
              <h1>Bienvenido a Ecommerce UPCH</h1>
              <h2>Crea tu cuenta</h2>
            </div>
            <div className='form-signup-container'>
              <form onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div>
                  <Input
                    id='firstName'
                    text='Nombre'
                    type='text'
                    value={values.firstName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
                  {touched.firstName && errors.firstName && (
                    <p className='error-text'>{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <Input
                    id='lastName'
                    text='Apellido'
                    type='text'
                    value={values.lastName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
                  {touched.lastName && errors.lastName && (
                    <p className='error-text'>{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <Input
                    id='dateOfBirth'
                    text='Fecha de nacimiento'
                    type='date'
                    value={values.dateOfBirth}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
                  {touched.dateOfBirth && errors.dateOfBirth && (
                    <p className='error-text'>{errors.dateOfBirth}</p>
                  )}
                </div>
                <div>
                  <Input
                    id='email'
                    text='Correo Electronico'
                    type='email'
                    value={values.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
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
                  ></Input>
                  {touched.password && errors.password && (
                    <p className='error-text'>{errors.password}</p>
                  )}
                </div>
                <div>
                  <Input
                    id='passwordConfirmation'
                    text='Confirmar contraseña'
                    type='password'
                    value={values.passwordConfirmation}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
                  {errors.passwordConfirmation &&
                    touched.passwordConfirmation && (
                      <p className='error-text'>
                        {errors.passwordConfirmation}
                      </p>
                    )}
                </div>
                <div
                  className='btn-container'
                  style={{ marginTop: '30px', marginBottom: '20px' }}
                >
                  <Button
                    classNameButton='primary-button'
                    text='Crear cuenta'
                    onClick=''
                    width='278px'
                    type='submit'
                  ></Button>
                </div>
              </form>
            </div>
            <div className='have-account'>
              <p style={{ marginRight: '5px' }}>¿Ya tienes cuenta? </p>
              <a href='#'>Inicia sesión</a>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
