import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from '../context/AuthContext/AuthProvider';
import Admin from './Admin/Admin';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import CreateProductForm from './CreateProductForm/CreateProductForm';
import ProductDetail from './ProductDetail/ProductDetail';
import SignUp from './SignUp/SignUp';
import AddressForm from './AddressForm/AddressForm';
import UpdateAddress from './UpdateAddress/UpdateAddress';
import NotFound from './NotFound/NotFound';
import AuthRoute from '../components/AuthRoute/AuthRoute';
import Checkout from './Checkout/Checkout';
import SearchPage from './SearchPage/SearchPage';
import Cart from './Cart/Cart';
import AdminRoute from '../components/AdminRoute/AdminRoute';
import { Provider } from 'react-redux';
import { store } from '../store';
import UpdateProductForm from './UpdateProductForm/UpdateProductForm';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route element={<AdminRoute />}>
                <Route path='/admin' element={<Admin />} />
                <Route path='/product/new' element={<CreateProductForm />} />
                <Route
                  path='/product/:id/edit'
                  element={<UpdateProductForm />}
                />
              </Route>
              <Route path='/addressform' element={<AddressForm />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/address/:id/update' element={<UpdateAddress/>}></Route>
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/product' element={<SearchPage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
