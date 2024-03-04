import React, { Suspense } from 'react'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';
import Loading from './components/Loading/Loading';
import PriceSlider from './components/PriceSlider/PriceSlider';
import Register from './pages/Register/Register';
import Location from './pages/Location/Location';
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const Smember = React.lazy(() => import('./pages/Smember/Smember'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const UserProfile = React.lazy(() => import('./pages/AdminProfile'));
const Login = React.lazy(() => import('./pages/Login'));
const CustomerPage = React.lazy(() => import('./pages/CustomerPage'));
const CustomerProfile = React.lazy(() => import('./pages/CustomerProfile'));
const ProductList = React.lazy(() => import('./pages/Product/Product'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail/ProductDetail'));
const Cart = React.lazy(() => import('./pages/Cart/Cart'));
const Admin = React.lazy(() => import('./pages/Admin/Admin'));
const About = React.lazy(() => import('./pages/About/About'));

const ProjectRoutes = () => {
    const ROLE_ADMIN = 'admin';
    const ROLE_CUSTOMER = 'customer';

    const AdminRoute = ({ element }) => {
        const roleUser = localStorage.getItem("role").replace(/"/g, "");

        if (roleUser === ROLE_ADMIN) {
            return element;
        } else {
            return <Navigate to="/unauthorized" replace />;
        }
    };


    return (
        <React.Suspense fallback={<>Loading...</>}>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </>
                }
                >
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/admin' element={<AdminPage />} /> */}
                    {/* <Route path='/admin/profile' element={<UserProfile />} /> */}
                    <Route path='/customer' element={<CustomerPage />} />
                    <Route path='/customer/profile' element={<CustomerProfile />} />
                    <Route path='/product' element={<ProductList />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/smember' element={<Smember />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/slider' element={<PriceSlider />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/location' element={<Location />} />

                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route
                    path="/admin/*"
                    element={
                        <AdminRoute
                            element={
                                <Suspense fallback={<Loading />}>
                                    <Admin />
                                </Suspense>
                            }
                        />
                    }
                />

            </Routes>

        </React.Suspense>
    )
}

export default ProjectRoutes;
