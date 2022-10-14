import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Products from "./pages/Products";
import Cart from './pages/Cart';
import Navigation from './components/navigation/Navigation';
import UserDetails from "./pages/UserDetails";
import RequireAuth from "./utils/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import ProductsList from "./components/ProductsList/ProductsList";
import Product from "./pages/Product";
import Admin from './pages/Admin'
import AdminForm from "./components/adminForm/AdminForm";
import Auth from "./pages/Auth";
import LoginForm from "./components/loginForm/LoginForm";
import Register from './pages/Register/register'
import PendingOrders from './pages/PendingOrders'
import AddressBook from "./components/addressBook/AddressBook";
import ChangePassword from "./components/changePassword/ChangePassword";
import OrdersHistory from "./components/ordersHistory/OrdersHistory";
import UserOrders from "./components/userOrders/UserOrders";
import CompletedOrders from "./pages/CompletedOrders";
import Success from "./pages/Success";

const Router = () => {
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>

          {/* public routes  */}

          <Route  path='/account' element={<Auth/>}>
            <Route  index element={<LoginForm/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
          <Route path='/unauthorized' element={<Unauthorized/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/success' element={<Success/>}/>
          <Route exact path="/" element={<Products/>}>
            <Route  index element={<ProductsList />}/>
            <Route  path=':category' element={<ProductsList />}/>
            <Route path='/:category/:title' element={<Product/>}/>
          </Route>


          {/* registered users routes */}

          <Route element={<RequireAuth allowedRoles={[2001]}/>}>
            <Route exact path='/userDetails' element={<UserDetails/>} >
              <Route index element={<UserOrders/>}/>
              <Route  path='address' element={<AddressBook/>}/>
              <Route path='changePassword' element={<ChangePassword/>}/>
              <Route path='history' element={<OrdersHistory/>}/>
              
            </Route>
          </Route>

          {/* admin routes */}

          <Route element={<RequireAuth allowedRoles={[5015]}/>}>
            <Route exact path='/admin' element={<Admin/>}>
              <Route index element={<PendingOrders/>}/>
              <Route path='completed' element={<CompletedOrders/>}/>
              <Route path='form' element={<AdminForm/>}/>
            </Route>
          </Route>

        </Routes>
    </BrowserRouter>
  
  );
};

export default Router;
