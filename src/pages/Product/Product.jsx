// ProductsList.jsx
import React, { useEffect, useState } from 'react';
import { AuthUser } from '../../context/authContext';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { getData } = AuthUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                getData('/products')
                    .then((data) => {
                        console.log(data);
                        setProducts(data.data);
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
        <div className="container mt-5">
            <h2 className="mb-4">Product List</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 mb-2">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ProductsList;
