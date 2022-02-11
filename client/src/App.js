
import './App.css';
import Login from './pages/Login';
import { LoginContext } from '../src/Context/LoginContext'
import { useState, useMemo } from 'react';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import AdminHome from './pages/AdminHome';
import Addproduct from './pages/Addproduct';
import Update from './pages/Update';
import Product from './pages/Product';
import Cart from './pages/Cart';
import CartView from './pages/CartView';
import DeliveryAddress from './pages/DeliveryAddress';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [userName, setUserName] = useState({
    uname:'sethu'
  });
  return (

    <div className="App">

      <LoginContext.Provider value={{uname:userName.uname,setUserName}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Homepage />} />
            <Route path="adminhome" element={<AdminHome />} />
            <Route path="addproduct" element={<Addproduct />} />
            <Route path="edit/:id" element={<Update />} />
            <Route path="buy/:id" element={<Product />} />
            <Route path="cart/:id" element={<Cart />} />
            <Route path="cartview" element={<CartView />} />
            <Route path="delivery/:id" element={<DeliveryAddress />} />
          </Routes>
        </BrowserRouter>,
      </LoginContext.Provider>

    </div>
  );
}

export default App;
