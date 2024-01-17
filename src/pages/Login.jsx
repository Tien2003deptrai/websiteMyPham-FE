import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthUser } from '.././context/authContext';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { postData, setToken } = AuthUser();

    const ROLES = {
        ADMIN: 'admin',
        CUSTOMER: 'customer',
    };

    const handleLogin = async () => {
        try {
            let response = await postData('/auth/login', { email, password });
            console.log('Server Response:', response);

            if (response.token && response.role) {
                setToken(response, response.token, response.role);

                console.log('Token:', response.token);
                console.log('User:', response);

                if (response.role === ROLES.ADMIN) {
                    navigate('/admin-dashboard');
                } else if (response.role === ROLES.CUSTOMER) {
                    navigate('/customer-dashboard');
                }
            } else {
                console.error('Token or role is missing in the server response.');
            }
        } catch (error) {
            console.error(error);
            toast.error('Email or password is incorrect.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    };


    return (
        <div>
            <h2>Login</h2>
            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
