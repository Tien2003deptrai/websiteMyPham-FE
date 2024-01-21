import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const ButtonCart = () => {
    const cart = useSelector((state) => state) || [];
    const cartLength = cart.length;

    console.log("Redux State:", cartLength);
    return (
        <>
            <NavLink to="/cart" className="btn btn-secondary me-2 text-black">
                <Badge badgeContent={cartLength} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </NavLink>
        </>
    );
};

export default ButtonCart;
