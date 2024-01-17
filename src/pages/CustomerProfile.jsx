import React, { useEffect, useState } from 'react';
import { getData } from '../hook/useFetch';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                getData('/customer/profile')
                    .then((data) => {
                        console.log(data);
                        setUser(data.data);
                    })
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {user && (
                <div>
                    <h2>Customer Profile</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
