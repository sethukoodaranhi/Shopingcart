
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
import EditAddress from './pages/EditAddress';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [userName, setUserName]=useState({
    uname:'',
    admin:''
  });
  return (
    <div className="App">
      
        <BrowserRouter>
        <LoginContext.Provider value={{uname:userName.uname,admin:userName.admin,setUserName}}>
          <Routes>          
            <Route exact path="/" element={<Login />} />
            <Route exact path="register" element={<Register />} />
            <Route exact path="home" element={<Homepage />} />
            <Route exact path="/adminhome" element={<AdminHome />} />    
            <Route exact path="/addproduct" element={<Addproduct />} />
            <Route exact path="edit/:id" element={<Update />} />
            <Route exact path="buy/:id" element={<Product />} />
            <Route  exact path="cart/:id" element={<Cart />} />
            <Route exact path="cartview" element={<CartView />} />
            <Route exact path="delivery" element={<DeliveryAddress />} />
            <Route exact path="editaddress/:id" element={<EditAddress />} />
          </Routes>
          </LoginContext.Provider>
        </BrowserRouter>
      

    </div>
  );
}

export default App;
