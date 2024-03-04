import React, { useEffect, useState } from 'react';
import { AuthUser } from '../../context/authContext';
import ProductCard from '../ProductCard/ProductCard';
import gucciImg from '../../img/gucci.png';
import hydraImg from '../../img/Hydra.png';
import foreoImg from '../../img/foreo.png';
import salesImg from '../../img/sales.png';
import './Product.css';
import { Link } from 'react-router-dom';

const ProductsList = () => {
    const [gucci, setGucci] = useState([]);
    const [hydra, setHyDra] = useState([]);
    const [foreo, setForeo] = useState([]);
    const [rating, setRating] = useState([]);

    const { getData } = AuthUser();

    const fetchData = async (endpoint, setter) => {
        try {
            const data = await getData(endpoint);
            setter(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const reloadAllData = () => {
        fetchData('/products/brand/Gucci', setGucci);
        fetchData('/products/brand/Hydra', setHyDra);
        fetchData('/products/brand/Foreo', setForeo);
        fetchData('/products/rating/4.5', setRating);
    };

    useEffect(() => {
        reloadAllData();
    }, []);

    const renderProductList = (productList) => {
        return (
            <div className="container mt-2">
                <div className="row">
                    {productList.slice(0, 4).map((product) => (
                        <div key={product.id} className="col-md-3 mb-2">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <>
            <div className='app'>
                <div className="container mt-5">
                    <img src={gucciImg} alt="gucci" width={'100%'} />
                    {renderProductList(gucci)}
                    <div className='text-center mb-4'>
                        <Link to={'/gucci'}>
                            <button className='btn btn-primary'>Xem thêm sản phẩm</button>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <img src={hydraImg} alt="hydra" width={'100%'} height={'900px'} />
                    {renderProductList(hydra)}
                    <div className='text-center mt-2 mb-4'>
                        <Link to={'/hydra'}>
                            <button className='btn btn-primary'>Xem thêm sản phẩm</button>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <img src={foreoImg} alt="foreo" width={'100%'} />
                    {renderProductList(foreo)}
                    <div className='text-center mt-2 mb-2'>
                        <Link to={'/foreo'}>
                            <button className='btn btn-primary'>Xem thêm sản phẩm</button>
                        </Link>
                    </div>
                </div>

                <div className="container mt-5">
                    <img src={salesImg} alt="foreo" width={'100%'} />
                    {renderProductList(rating)}
                </div>
            </div>
        </>
    );
};

export default ProductsList;
