import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthUser } from '../../context/authContext';
import { sendToast } from '../../config/configToast';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { postData, setToken } = AuthUser();

    const handleRegister = async () => {
        try {
            let response = await postData('/auth/register', { name, email, password });
            if (response) {
                setToken(response, response.token);
                navigate('/login');
                sendToast('Register Successfully');
            } else {
                console.error('Token or role is missing in the server response.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container" style={{ marginTop: '200px' }}>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <h2 className=''>Register</h2>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input type="text" className="form-control"
                            style={{ width: '400px' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3" >
                        <label className="form-label">Email:</label>
                        <input type="text" className="form-control"
                            style={{ width: '400px' }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input type="password" className="form-control"
                            style={{ width: '400px' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary me-3" onClick={handleRegister}>
                        Register
                    </button>
                    <Link to="/login" className="btn btn-success">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
