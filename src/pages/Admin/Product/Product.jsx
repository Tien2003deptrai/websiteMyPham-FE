import React, { useEffect, useState } from 'react';
import { AuthUser } from '../../../context/authContext';
import ProductItem from './ProducItem/ProductItem';
import ProductList from './ProductList/ProducList';
import ActionProduct from './ActionProduct/ActionProduct';
import './Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showActionProduct, setShowActionProduct] = useState(false);
    const { getData } = AuthUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData('/admin/products');
                setProducts(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddProductClick = () => {
        setShowActionProduct(true);
    };

    const showCheckOut = (products) => {
        return products.map((product, index) => (
            <ProductItem key={index} product={product} index={index} />
        ));
    };

    return (
        <div className="container">
            <div className="col-xs-12 col-md-12 col-lg-12">
                {showActionProduct ? (
                    <ActionProduct />
                ) : (
                    <>
                        <button onClick={handleAddProductClick} className="btn btn-info mb-10">
                            Thêm Sản Phẩm
                        </button>
                        <ProductList>{showCheckOut(products)}</ProductList>
                    </>
                )}
            </div>
        </div>
    );
};

export default Product;
