import React from 'react';
import imgBlog from '../../img/imgeBlog.png'
import './Blog.css'
const Blog = () => {
    return (
        <>
            <div>
                <header>
                    <div className="container">
                        <div className="row d-flex ">
                            <div className="col-md-3">
                                <a href="#" className="headerTitle"><span><i className="fa-solid fa-truck-fast" /></span> FREESHIP VỚI HOÁ
                                    ĐƠN TỪ 499K</a>
                            </div>
                            <div className="col-md-3">
                                <a href="#" className="headerTitle">HÀNG CHÍNH HÃNG BẢO HÀNH TOÀN QUỐC</a>
                            </div>
                            <div className="col-md-3">
                                <a href="#" className="headerTitle">THANH TOÁN NHẬN HÀNG</a>
                            </div>
                            <div className="col-md-3">
                                <a href="#" className="headerTitle">ĐỔI TRẢ LINH HOẠT TRONG 14 NGÀY</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row-md-3 p-2 backgroundBrand d-flex">
                            <div className="col-md-6 ">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="row ">
                                            <div className="col-md-4 ms-5 "><a href="tel:+84912999999" className="headerTitle"><span><i className="fa-solid fa-phone" /></span> 0912999999</a></div>
                                            <div className="col-md-3 "><a href="tel:+84912123456" className="headerTitle"><span><i className="fa-solid fa-phone" /></span> 0912123456</a></div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#"><img src="./image/logo-web.png" alt="Logo" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6"><input className="ms-5" type="text" placeholder="Search produts..." /></div>
                                    <div className="col-md-2 fs-5 "><a href="#" className="text-dark"><i className="fa-solid fa-user" /></a>
                                    </div>
                                    <div className="col-md-4 ">
                                        <a href="#" className="pb-2 text-dark fs-4 position-relative">
                                            <i className="fa-solid fa-cart-shopping" />
                                            <span className="position-absolute text-danger top-0 start-100 translate-middle badge rounded-pill ">
                                                0
                                            </span>
                                        </a>
                                        <span className="total_Product">0đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <div className="row d-flex">
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="../index.html">Trang chủ</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                </ol>
                            </div>
                        </div>
                        <div className="my-2">
                            <div className="row d-flex">
                                <div className="col-md-9">
                                    <div className="row">
                                        <div className="col-md-5 ms-5">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 ms-5 mt-4">
                                            <div className="card" style={{ width: '25rem', height: 'auto' }}>
                                                <img src={imgBlog} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">[Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ
                                                        CỰC CHẤT
                                                    </h5>
                                                    <div className="d-flex">
                                                        <a href="#" className="card-title-a ">mint Blog</a>
                                                        <a href="#" className="card-title-a">22/1/2024</a>
                                                        <a href="#" className="card-title-a">mint</a>
                                                    </div>
                                                    <hr />
                                                    <p className="card-text ">
                                                        Lần đầu tiên trong 9 năm hoạt động, Mint kết hợp cùng hơn 100 thương hiệu
                                                        chăm sóc
                                                        da và trang điểm chính hãng làm nên
                                                        Đại tiệc sale khủng
                                                    </p>
                                                    <div>
                                                        <a href="#" className="btn btn-secondary rounded-pill ">Read More</a>
                                                        <a href="# " className="leaveComment"><i className="fa-regular fa-comment" />
                                                            Leave a
                                                            comment</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h2>Tìm Kiếm</h2>
                                    <hr />
                                    <input className="searchBlog" type="search" placeholder="Tìm kiếm..." />
                                    <h2>About</h2>
                                    <hr />
                                    <p>Một góc nhỏ mint chia sẻ kiến thức nhé</p>
                                    <h2>Chuyên mục</h2>
                                    <hr />
                                    <div className="mt-3">
                                        <ul className="categoriesTile">
                                            <li>&gt;<a href="#">Mẹ &amp; Bé
                                                <hr />
                                            </a></li>
                                            <li>&gt;<a href="#">Mint</a>
                                                <ul>
                                                    <li>&gt;<a href>Event</a></li>
                                                    <li>&gt;<a href>Makeup Series</a></li>
                                                    <li>&gt;<a href>Make Up Tips</a></li>
                                                    <li>&gt;<a href>News</a></li>
                                                    <li>&gt;<a href>Reviews</a></li>
                                                    <li>&gt;<a href>Routine chăm sóc da </a></li>
                                                    <li>&gt;<a href>Skincare Tips</a></li>
                                                    <li>&gt;<a href>So sánh sản phẩm</a></li>
                                                    <li>&gt;<a href>Swatch</a></li>
                                                    <li>&gt;<a href>Trị Mụn</a></li>
                                                </ul>
                                            </li>
                                            <li>&gt;<a href="#">Sale Off</a></li>
                                            <li>&gt;<a href="#">Tổng hợp Brand</a></li>
                                            <li>&gt;<a href="#">Uncategorized</a></li>
                                        </ul>
                                    </div>
                                    <h2>Bài viết mới</h2>
                                    <hr />
                                </div>
                            </div>
                            <div className="ms-5 mt-4">
                                <nav aria-label="...">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item active" aria-current="page">
                                            <span className="page-link">1</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div >

        </>
    )
}

export default Blog;
