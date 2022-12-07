import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './SignUp.css';
import * as yup from 'yup';
import { Formik } from 'formik';
import { createUser } from '../../api/services/user';
import { useNavigate } from 'react-router-dom';
import Register from '../../assets/svg/register.svg'
import { Link } from 'react-router-dom';

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
    console.log(values);
    const response = await createUser(values.email, values.password, values.firstName, values.lastName, values.dateOfBirth);

    if (response.status == 201) {
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
        <div>
          <div className='h-screen flex justify-between items-center'>
          <div className='w-2/3 h-full grid justify-items-center items-center'>
            <div className='w-2/3'>
                <h1 className='pb-2 text-5x.l'>Crea tu cuenta</h1>
                <p className='pb-2 text-4x-l'> Crea hoy tu cuenta y empieza a disfrutar de nuestros beneficios</p>
                <form onSubmit={handleSubmit}>
                    <div className='mt-6'>
                    <Input
                    id='firstName'
                    placeholder='Nombre'
                    type='text'
                    value={values.firstName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
                  {touched.firstName && errors.firstName && (
                    <p className='error-text'>{errors.firstName}</p>
                  )}
                    </div>
                    <div className='mt-6'>
                    <Input
                    id='lastName'
                    placeholder='Apellido'
                    type='text'
                    value={values.lastName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
                  {touched.lastName && errors.lastName && (
                    <p className='error-text'>{errors.lastName}</p>
                  )}
                    </div>
                    <div className='mt-6'>
                    <Input
                    id='dateOfBirth'
                    placeholder='Fecha de nacimiento'
                    type='date'
                    value={values.dateOfBirth}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  ></Input>
                  {touched.dateOfBirth && errors.dateOfBirth && (
                    <p className='error-text'>{errors.dateOfBirth}</p>
                  )}
                    </div>
                    <div className='mt-6'>
                    <Input
                      id='email'
                      placeholder='Correo Electronico'
                      type='email'
                      value={values.email}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    ></Input>
                      {touched.email && errors.email && (
                      <p className='error-text'>{errors.email}</p>
                      )}
                    </div>
                    <div className='mt-6'>
                    <Input
                      id='password'
                      placeholder='Contraseña'
                      type='password'
                      value={values.password}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    ></Input>
                    {touched.password && errors.password && (
                    <p className='error-text'>{errors.password}</p>
                    )}
                    </div>
                    <div className='mt-6'>
                    <Input
                    id='passwordConfirmation'
                    placeholder='Confirmar contraseña'
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
                    <div className="btn-container" style={{marginTop: "30px", marginButtom: "20px"}} type="submit">
                      <Button className="primary-button" text="Agregar direccion" width="278px" type="submit">Registrarse</Button>
                    </div>
                    <div>
                      <p style={{ marginRight: '5px' }}>¿Ya tienes cuenta? </p>
                      <Link to='/login'> <a className='text-purple-600 text-xl'>Iniciar Sesion</a></Link>                    </div>
                </form>
            </div>
          </div>
              <div className="bg-purple w-2/3 h-full flex flex-col justify-center items-center">
                <img src={Register} alt="homeimg" className="img" />
              </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default SignUp;
