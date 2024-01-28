import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthUser } from '../../context/authContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { postData, setToken } = AuthUser();

    const handleRegister = async () => {
        try {
            let response = await postData('/auth/register', { name, email, password });
            console.log('Server Response:', response);

            if (response.token && response.role) {
                setToken(response, response.token, response.role);

                console.log('Token:', response.token);
                console.log('User:', response);

                navigate('/login');
            } else {
                console.error('Token or role is missing in the server response.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-success" onClick={handleRegister}>
                Register
            </button>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>

            {/* Bootstrap CDN Links */}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-rGv538WH5EQ3POJ0d6XYb56JO/bLD3X0N8uJx2Go/rs2+aW3ZtAqPVgE+6Mz5fEK"
                crossOrigin="anonymous"
            />
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263Xm2jQDlMXABsIbr5NEFip2Sl" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofGiUktpQ5/cMOf9bC1ARjUc5I3l85RwRT" crossOrigin="anonymous"></script>
        </div>
    );
};

export default Register;
