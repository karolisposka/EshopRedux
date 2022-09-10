import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import Navigation from './components/navigation/Navigation';
import Account from '../src/pages/Account'

const Router = () => {
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path='/cart' element={<Cart/>}></Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/checkout' element={<Checkout/>}/>
          <Route exact path='/account' element={<Account/>}/>
        </Routes>
    </BrowserRouter>
  
  );
};

export default Router;
