import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
    return (
        <div class='movie'>
            <div>
                <p>2024</p>
            </div>
            <div>
                <img src={product.images[0]}
                    alt='movie.Title' />
            </div>
            <div>
                <span>{product.brand}</span>
                <h3>{product.title}</h3>
                <h3>${product.price}</h3>
                <h3>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" color="primary">
                            Xem chi tiết
                        </Button>
                    </Link>
                </h3>
            </div>
        </div>

    );
};

export default ProductCard;
