import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthUser } from '.././context/authContext';

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
                    navigate('/admin');
                } else if (response.role === ROLES.CUSTOMER) {
                    navigate('/');
                }
            } else {
                console.error('Token or role is missing in the server response.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Login</h2>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary me-3" onClick={handleLogin}>
                        Login
                    </button>
                    <Link to="/register" className="btn btn-success">
                        Register
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Login;
