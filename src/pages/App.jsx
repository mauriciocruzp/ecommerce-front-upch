import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import ProductDetail from './ProductDetail/ProductDetail';
import NewProduct from './NewProduct/NewProduct';
import Admin from './Admin/Admin';
import RoleContext from '../context/RoleContext';
import AuthProvider from '../context/AuthContext/AuthProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route
              path='/details'
              element={
                <ProductDetail
                  productName='Memoria RAM DDR4 8GB 2933MHz Kingston HyperX Predator RGB 1 Modulo Negro / HX429C15PB3A/8'
                  img='https://ddtech.mx/assets/uploads/f1cc55f716f02f52f65f99080f4361ef.jpg'
                  price='1,249.00'
                  details='Memoria RAM DDR4 8GB 2933MHz Kingston HyperX Predator RGB 1 Modulo Negro / HX429C15PB3A/8'
                />
              }
            />
            <Route path='/new-product' element={<NewProduct />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
