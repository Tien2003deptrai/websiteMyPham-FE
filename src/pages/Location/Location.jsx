import imgMiniMap from '../../img/mint-maps-ban-do-mint-2.jpg';

const Location = () => {
    return (
        <>
            <div>
                <div>
                    <div className="container mt-5">
                        <div className="row d-flex">
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="../index.html">Trang chủ</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Location</li>
                                </ol>
                            </div>
                        </div>
                        <div className="my-3 bg-white">
                            <div className="flex text-center">
                                <h1>Địa Điểm Cửa Hàng</h1>
                            </div>
                            <div className="row my-5 ">
                                <div className="col-md-6">
                                    <div className="flex text-center">
                                        <h2>---------------------<i className="fa-solid fa-envelope-open " />--------------------
                                        </h2>
                                    </div>
                                    <div className="mt-3">
                                        <form className="form-group">
                                            <div className>
                                                <label className>Tên của bạn: <span style={{ color: 'red' }}>*</span></label><br />
                                                <input type="text" className="p-2 border rounded rounded-pill w-75" />
                                            </div>
                                            <div className="mt-3">
                                                <label className>Email: <span style={{ color: 'red' }}>*</span></label><br />
                                                <input type="text" className="p-2 border rounded rounded-pill w-75" />
                                            </div>
                                            <div className="mt-3">
                                                <label className>Tiêu đề: <span style={{ color: 'red' }}>*</span></label><br />
                                                <input type="text" className="p-2 border rounded rounded-pill w-75" />
                                            </div>
                                            <div className="mt-3">
                                                <label className>Thông điệp: <span style={{ color: 'red' }}>*</span></label><br />
                                                <input type="text" className=" note  p-2 border rounded rounded-5 w-75 " />
                                            </div>
                                            <div className="mt-3">
                                                <button className="px-3 py-2  border rounded rounded-3 ">Gửi đi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className="mx-3 ">
                                        <h2 className=" flex text-center">Mint Cosmetic – Cửa Hàng</h2>
                                        <h3 className=" fw-light fs-1"> Chuyên Bán <span className="fw-medium"> Mỹ Phẩm Chính Hãng
                                            <br />
                                            Chọn Lọc Các Thương Hiệu Từ Anh, Pháp,
                                            Mỹ, Nhật.. </span></h3>
                                    </div>
                                    <div className="m-3">
                                        <p>CS1: Số 7 Ngõ 100 Tây Sơn, Quận Đống Đa, Hà Nội</p>
                                        <p>CS2: Số 152C Triệu Việt Vương, Quận Hai Bà Trưng, Hà Nội</p>
                                        <p>CS3: Ngõ 215, 106D6 Tô Hiệu, Quận Cầu Giấy, Hà Nội</p>
                                        <p>CS4: 104-A1 Phạm Ngọc Thạch, Quận Đống Đa, Hà Nội</p>
                                        <p>CS5: Số 23 Lê Văn Lương, Quận Thanh Xuân, Hà Nội</p>
                                        <p>CS6: Số 26BT2 Nguyễn Hữu Thọ, Hoàng Mai, Hà Nội</p>
                                        <p>CS7: Số 140A Đội Cấn, Ba Đình, Hà Nội</p>
                                        <p>CS8: Số 8 Nguyễn Mậu Tài, Trâu Quỳ, Gia Lâm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-3">
                        <div>
                            <h2>BẢN ĐỒ CỬA HÀNG MINT07</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div>
                                    <button className="w-100 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Mint Tây Sơn</span></button>
                                </div>
                                <div>
                                    <button className="w-100 mt-1 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Triệu Việt Vương</span></button>
                                </div>
                                <div>
                                    <button className="w-100 mt-1 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Tô Hiệu</span></button>
                                </div>
                                <div>
                                    <button className="w-100 mt-1 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Phạm Ngọc Thạch</span></button>
                                </div>
                                <div>
                                    <button className="w-100 mt-1 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Lê Văn Lương</span></button>
                                </div>
                                <div>
                                    <button className="w-100 mt-1 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Nguyễn Hữu Thọ</span></button>
                                </div>
                                <div>
                                    <button className="w-100 mt-1 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Đội Cấn</span></button>
                                </div>
                                <div>
                                    <button className="w-100 mt-1 p-3 fs-4 border rounded"><i className="fa-solid fa-location-dot" />
                                        <span>Nguyễn Mậu Tài</span></button>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <img src={imgMiniMap} alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Location;