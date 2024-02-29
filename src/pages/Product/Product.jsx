import React, { useEffect, useState } from 'react';
import { AuthUser } from '../../context/authContext';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [products_T, setProducts_T] = useState([]);
    const [products_J, setProducts_J] = useState([]);
    const [products_Rating, setProducts_Rating] = useState([]);

    const { getData } = AuthUser();

    useEffect(() => {
        const category_Trousers = 'Trousers';
        const fetchData = async () => {
            try {
                const data = await getData(`/products/category/${category_Trousers}`);
                setProducts(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [getData]);

    useEffect(() => {
        const category_T_Short = 'T-Shirt';
        const fetchData = async () => {
            try {
                const data = await getData(`/products/category/${category_T_Short}`);
                setProducts_T(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [getData]);

    useEffect(() => {
        const category_Jack = 'Jacket';
        const fetchData = async () => {
            try {
                const data = await getData(`/products/category/${category_Jack}`);
                setProducts_J(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [getData]);

    useEffect(() => {
        const Rating = 4.5;
        const fetchData = async () => {
            try {
                const data = await getData(`/products/rating/${Rating}`);
                setProducts_Rating(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [getData]);

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">Trousers</h2>
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-3 mb-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4">T-shirt</h2>
                <div className="row">
                    {products_T.map((product) => (
                        <div key={product.id} className="col-md-3 mb-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4">Jackets</h2>
                <div className="row">
                    {products_J.map((product) => (
                        <div key={product.id} className="col-md-3 mb-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="mb-4">Sản phẩm được đánh giá cao</h2>
                <div className="row">
                    {products_Rating.map((product) => (
                        <div key={product.id} className="col-md-3 mb-1">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsList;
