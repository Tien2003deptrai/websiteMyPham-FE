import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Card sx={{ maxWidth: 250, height: 320 }}>
            <CardMedia
                component="img"
                alt={product.title}
                height="140"
                image={product.images[0]}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                        Buy Now
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
