import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <NavLink to={`/product/${product.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
            </div>
        </div >
    );
};


export default ProductCard;
