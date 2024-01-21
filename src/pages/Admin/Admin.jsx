import React from 'react'
import { Routes, Route } from 'react-router-dom';
const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));
const ActionProduct = React.lazy(() => import('./Product/ActionProduct/ActionProduct'));
const Order = React.lazy(() => import('./Order/Order'));
const Profile = React.lazy(() => import('./Profile/Profile'));
const Product = React.lazy(() => import('./Product/Product'));

const Admin = () => {
    return (
        <Routes  >
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/order" element={<Order />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Product />} />
            <Route path="/action" element={<ActionProduct />} />
        </Routes >
    )
}

export default Admin
