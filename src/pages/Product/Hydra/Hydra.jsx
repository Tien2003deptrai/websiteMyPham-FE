import React, { useEffect, useState } from 'react';
import { AuthUser } from '../../../context/authContext';
import hydraImg from '../../../img/Hydra.png';
import ProductCard from '../../ProductCard/ProductCard';
import Carousel from '../../../layouts/Carousel/Carousel';
import '.././Product.css';

const filteredData = (cards, key) => {
    return cards.filter(card => {
        return Object.values(card).some(value => {
            return value.toString().toLowerCase().includes(key);
        })
    })
}

const Hydra = () => {
    const [hydra, setHydra] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
        fetchData('/products/brand/Hydra', setHydra);
    };

    useEffect(() => {
        reloadAllData();
    }, []);

    const renderProductList = (productList) => {
        const filteredProducts = filteredData(productList, searchTerm);
        return (
            <div className="container mt-3">
                <div className="row">
                    {filteredProducts.map((product) => (
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
            <Carousel />
            <div className='app'>
                <div className="container mt-3">
                    <img src={hydraImg} alt="hydra" width={'100%'} />
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    {renderProductList(hydra)}
                </div>

            </div>
        </>
    );
};

export default Hydra;
