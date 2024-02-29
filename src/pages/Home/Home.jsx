import React from 'react';
import ProductsList from '../../pages/Product/Product';
import Carousel from '../../layouts/Carousel/Carousel';
import './Home.css';

const Home = () => {

    return (
        <>
            <Carousel />
            <ProductsList />
        </>
    );
};

export default Home;
