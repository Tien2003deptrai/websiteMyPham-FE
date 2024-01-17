import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
const UserProfile = React.lazy(() => import('./pages/AdminProfile'));
const Login = React.lazy(() => import('./pages/Login'));
const AdminPage = React.lazy(() => import('./pages/AdminPage'));
const CustomerPage = React.lazy(() => import('./pages/CustomerPage'));
const CustomerProfile = React.lazy(() => import('./pages/CustomerProfile'));
const ProductList = React.lazy(() => import('./pages/Product/Product'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail/ProductDetail'));

const ProjectRoutes = () => {
    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/admin/profile' element={<UserProfile />} />
                <Route path='/customer' element={<CustomerPage />} />
                <Route path='/customer/profile' element={<CustomerProfile />} />
                <Route path='/home' element={<Home />} />
                <Route path='/product' element={<ProductList />} />
                <Route path='/product/:id' element={<ProductDetail />} />
            </Routes>
        </React.Suspense>
    )
}

export default ProjectRoutes;
