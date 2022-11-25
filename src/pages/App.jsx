import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from '../context/AuthContext/AuthProvider';
import Admin from './Admin/Admin';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import ProductForm from './ProductForm/ProductForm';
import ProductDetail from './ProductDetail/ProductDetail';
import SignUp from './SignUp/SignUp';
import AddressForm from './AddressForm/AddressForm';
import ListAddress from './ListAddress/ListAddress';
import NotFound from './NotFound/NotFound';
import AuthRoute from '../components/AuthRoute/AuthRoute';
import Checkout from './Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path='admin/new-product' element={<ProductForm />} />
              <Route path='/admin' element={<Admin />} />
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/addressform' element={<AddressForm />} />
            <Route path='/listaddress' element={<ListAddress />}></Route>
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
