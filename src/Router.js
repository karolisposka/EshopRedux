import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import Products from "./pages/Products";
import Cart from './pages/Cart';
import Navigation from './components/navigation/Navigation';
import Account from '../src/pages/Account'
import UserDetails from "./pages/UserDetails";
import PrivateRoutes from "./utils/PrivateRoute";
import AdminRoute from "./utils/AdminRoute";
import ProductsList from "./components/ProductsList/ProductsList";
import {useSelector} from 'react-redux'
import Home from './pages/Home'
import CategoriesList from "./components/categoriesList/CategoriesList";
import Product from "./pages/Product";
import Admin from './pages/Admin'

const Router = () => {

  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route element={<Admin/>} exact path='/admin'/>
          <Route element={<PrivateRoutes/>}>
            <Route element={<UserDetails/>} exact path='/userDetails/*'/>
          </Route>
          <Route exact path="/products" element={<Products/>} >
          <Route path=':title' element={<Product/>}/>
            <Route exact path='categories/:category' element={<ProductsList />}>
              <Route path=':title' element={<Product/>}/>
            </Route>
            
          </Route>
          <Route exact path='/account' element={<Account/>}/>
        </Routes>
    </BrowserRouter>
  
  );
};

export default Router;
