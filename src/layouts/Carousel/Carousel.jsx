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
                    <div className="col-12">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/419740371_383153337638303_4116281730619479340_n.png?_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeF5NslqhGbJaXraJxq8qlWwsvBY0XoJpHay8FjRegmkdv3YNwaZidUuKAi6GVlnQrTAp1Y26IZRkmk2OAB4Lwwy&_nc_ohc=vvK8oK0qdQMAX9VVgLL&_nc_ht=scontent.fdad3-3.fna&oh=03_AdQM60gngu63QzYY94W-oWkqFtIi4oTYe1BgJLug2YOI2w&oe=65D9799A"
                                        className="d-block w-100" alt="..." style={{ height: 500, maxWidth: '100%' }} />
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
