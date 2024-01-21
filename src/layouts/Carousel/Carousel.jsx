import React from 'react';
import img_main from '../../img/img-main1.png';
import img_main1_1 from '../../img/img-main1_1.png';
import img_main1_2 from '../../img/img-main1_2.png';
import img_main2 from '../../img/img-main2.png';
import img_main3 from '../../img/img-main3.png';
import img_main4 from '../../img/img-main4.png';
import './Carousel.css';

const Carousel = () => {
    return (
        <>
            <div className="container-fluid m-0 p-0">
                <div className="row m-2">
                    <div className="col-8">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={img_main} className="d-block w-100" alt="..." style={{ height: 380 }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={img_main1_1} className="d-block w-100" alt="..." style={{ height: 380 }} />
                                </div>
                                <div className="carousel-item">
                                    <img src={img_main1_2} className="d-block w-100" alt="..." style={{ height: 380 }} />
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
                        <div className="card mt-2">
                            <div className="row m-1">
                                <div className="col">
                                    <h5><b>TRỢ GIÁ MÙA DỊCH</b></h5>
                                    <h6><b>Ưu đãi vô địch</b></h6>
                                </div>
                                <div className="col">
                                    <h5><b>TRỢ GIÁ MÙA DỊCH</b></h5>
                                    <h6><b>Ưu đãi vô địch</b></h6>
                                </div>
                                <div className="col">
                                    <h5><b>TRỢ GIÁ MÙA DỊCH</b></h5>
                                    <h6><b>Ưu đãi vô địch</b></h6>
                                </div>
                                <div className="col">
                                    <h5><b>TRỢ GIÁ MÙA DỊCH</b></h5>
                                    <h6><b>Ưu đãi vô địch</b></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img className="mb-1" src={img_main2} style={{ height: 150, width: 480 }} alt="..." />
                        <img className="mb-1" src={img_main3} style={{ height: 150, width: 480 }} alt="..." />
                        <img className="mb-1" src={img_main4} style={{ height: 150, width: 480 }} alt="..." />
                    </div>

                </div>
            </div>

        </>
    );
};

export default Carousel;
