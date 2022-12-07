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
import ListAddress from './ListAddress/ListAddress';
import NotFound from './NotFound/NotFound';
import AuthRoute from '../components/AuthRoute/AuthRoute';
import Checkout from './Checkout/Checkout';
import SearchPage from './SearchPage/SearchPage';
import Cart from './Cart/Cart';
import AdminRoute from '../components/AdminRoute/AdminRoute';
import { Provider } from 'react-redux';
import { store } from '../store';
import UpdateProductForm from './UpdateProductForm/UpdateProductForm';
import routes from '../consts/routes';
import ProductList from './ProductList/ProductList';
import OrderDetail from './OrderDetail/OrderDetail';
import OrderList from './OrderList/OrderList';
import OrderListAdmin from './OrderListAdmin/OrderListAdmin';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route element={<AdminRoute />}>
                <Route path={routes.admin} element={<Admin />} />
                <Route
                  path={routes.productNew}
                  element={<CreateProductForm />}
                />
                <Route
                  path={routes.productEdit}
                  element={<UpdateProductForm />}
                />
                <Route path={routes.productList} element={<ProductList />} />
                <Route path={routes.orderListAdmin} element={<OrderListAdmin />} />
              </Route>
              <Route path={routes.addressList} element={<ListAddress/>}/>
              <Route path={routes.addressNew} element={<AddressForm />} />
              <Route path={routes.cart} element={<Cart />} />
              <Route path={routes.checkout} element={<Checkout />} />
              <Route path={routes.addressEdit} element={<UpdateAddress />} />
              <Route path={routes.orderList} element={<OrderList />} />
              <Route path={routes.orderDetail} element={<OrderDetail />} />
            </Route>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.register} element={<SignUp />} />
            <Route path={routes.login} element={<LogIn />} />
            <Route path={routes.productDetail} element={<ProductDetail />} />
            <Route path={routes.productSearch} element={<SearchPage />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
