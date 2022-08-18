import React from 'react';
import { Routes, Route } from "react-router-dom";
import "../src/bootstrap.min.css"

import Homes from './component/Homes';
import Header from './component/Header';
import CartScreen from './component/CartScreen';
import LoginScreen from './component/LoginScreen';
import RegisterScreen from './component/RegisterScreen';
import Footer from "./component/Footer";
import NotFound from './component/NotFound';
import ProfileScreen from './component/ProfileScreen';
import OrderScreen from "./component/OrderScreen"
import SuccessScreen from './component/SuccessScreen';
import AdminScreen from './component/AdminScreen';
import Users from './component/AdminComponents/Users';
import Products from './component/AdminComponents/Products';
import AddProducts from './component/AdminComponents/AddProducts';
const App = () => {
    return (
        <>
       
            <Routes>
                <Route path="/" element={<><Homes /><Footer/></>} />
                <Route path="/login" element={<><Header /> <LoginScreen/></>} />
                <Route path="/register" element={<><Header /> <RegisterScreen/></>} />
                <Route path="/cart" element={<><Header /> <CartScreen /> </>} />
                <Route path="/cart/:id" element={<><Header /> <CartScreen /> </>} />
                <Route path="*" element={<><Header /><NotFound /></>} />
                <Route path="/profile" element={<><Header /> <ProfileScreen /></>} />
                <Route path="/profile/order/:id" element={<><Header /> <OrderScreen /></>} />
                <Route path="/success" element={<><Header /> <SuccessScreen /></>} />
                <Route path="/admin" element={<><Header /> <AdminScreen /></>} />
                <Route path="/admin/users" element={<><Header /> <Users /></>} />
                <Route path="/admin/products" element={<><Header /> <Products /></>} />
                <Route path="/admin/addproducts" element={<><Header /> <AddProducts /></>} />
            </Routes>


        </>
    )
}

export default App