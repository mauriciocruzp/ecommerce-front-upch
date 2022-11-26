import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../context/AuthContext/AuthProvider";
import RequireAuth from "../utils/RequireAuth";
import Admin from "./Admin/Admin";
import Home from "./Home/Home";
import LogIn from "./LogIn/LogIn";
import ProductForm from "./ProductForm/ProductForm";
import ProductDetail from "./ProductDetail/ProductDetail";
import SignUp from "./SignUp/SignUp";
import AddressForm from "./AddressForm/AddressForm";
import ListAddress from "./ListAddress/ListAddress";
import NotFound from "./NotFound/NotFound";
import Cart from "./Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/addressform" element={<AddressForm />} />
            <Route path="/listaddress" element={<ListAddress />}></Route>
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />}/>  
            <Route
              path='admin/new-product'
              element={
                <RequireAuth>
                  <ProductForm />
                </RequireAuth>
              }
            />
            <Route
              path='/admin'
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            />

            <Route path='/*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
