import React from 'react';
import imgMain from '../../img/main.png';

import './Carousel.css';

const Carousel = () => {
    return (
        <>
            <div className="container-fluid m-0 p-0">
                <div className="row m-2">
                    <div className="col-12">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={imgMain}
                                        className="d-block w-100" alt="..." style={{ height: 700, width: '100%' }} />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <i className="fa-solid fa-chevron-left" style={{ color: 'black' }} />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <i className="fa-solid fa-chevron-right" style={{ color: 'black' }} />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Carousel;
