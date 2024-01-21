import React from 'react'
import img_blog1 from '../../img/img_blog1.png';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <div className="container m-5 p-0">
                <div className="row">
                    <div className="col-10">
                        <div className='row gap-5'>
                            <div className='col-4 mb-3'>
                                <div className="card" style={{ width: '27rem', marginBottom: '20px' }}>
                                    <img src={img_blog1} className="card-img-top" alt='' />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '27rem', marginBottom: '20px' }}>
                                    <img src={img_blog1} className="card-img-top" alt='' />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '27rem', marginBottom: '20px' }}>
                                    <img src={img_blog1} className="card-img-top" alt='' />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 ms-5'>
                                <div className="card" style={{ width: '27rem', marginBottom: '20px' }}>
                                    <img src={img_blog1} className="card-img-top" alt='' />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '27rem', marginBottom: '20px' }}>
                                    <img src={img_blog1} className="card-img-top" alt='' />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '27rem', marginBottom: '20px' }}>
                                    <img src={img_blog1} className="card-img-top" alt='' />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="search-container">
                            <input type="text" placeholder="Search..." className="search-input" />
                            <button type="button" className="search-button">Search</button>
                        </div>
                        <div className="categories-container">
                            <h3>Categories</h3>
                            <ul className="categories-list">
                                <li>Category 1</li>
                                <li>Category 2</li>
                                <li>Category 3</li>
                                {/* Add more categories as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog;
