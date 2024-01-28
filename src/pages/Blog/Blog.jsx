import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import Select from '@mui/material/Select';  // Import Select
import MenuItem from '@mui/material/MenuItem';
const Blog = () => {

    const [categories, setCategories] = useState([
        {
            title: "Mẹ & Bé",
            count: 6,
        },
        {
            title: "mint07 Blog",
            count: 2603,
        },
        {
            title: "Events",
            count: 82,
        },
        {
            title: "Khai Trương Cơ Sở",
            count: 20,
        },
        {
            title: "Makeup Series",
            count: 14,
        },
        {
            title: "MakeUp Tips",
            count: 170,
        },
        {
            title: "News",
            count: 1495,
        },
        {
            title: "Reviews",
            count: 602,
        },
        {
            title: "Routine chăm sóc da",
            count: 33,
        },
        {
            title: "Skincare Tips",
            count: 410,
        },
        {
            title: "So sánh sản phẩm",
            count: 37,
        },
        {
            title: "Swatch",
            count: 61,
        },
        {
            title: "Trị Mụn",
            count: 48,
        },
        {
            title: "Sale Off !!!",
            count: 292,
        },
        {
            title: "Tổng Hợp Brand",
            count: 48,
        },
        {
            title: "Uncategorized",
            count: 6,
        },
    ]);

    return (
        <>
            <main style={{ marginTop: '20px', padding: '16px', marginLeft: 0, marginRight: 0 }}>
                <div className="container-fluid">
                    <section className="text-center">
                        <Link to={'/'}>
                            <h5 className="mb-5 text-start"><strong>Trang chủ - Blgo</strong></h5>
                        </Link>
                        <div className="row">
                            <div className='col-lg-9'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Card>
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Typography>
                                                <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                                    Read more
                                                </Button>
                                                <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                                    Leave a comment
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="col-md-6">
                                        <Card>
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Typography>
                                                <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                                    Read more
                                                </Button>
                                                <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                                    Leave a comment
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <Card>
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Typography>
                                                <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                                    Read more
                                                </Button>
                                                <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                                    Leave a comment
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    {/* Thêm các card khác tương tự cho các bài viết khác */}

                                    <div className="col-md-6 mb-4">
                                        <Card>
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Typography>
                                                <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                                    Read more
                                                </Button>
                                                <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                                    Leave a comment
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <Card>
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Typography>
                                                <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                                    Read more
                                                </Button>
                                                <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                                    Leave a comment
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <Card>
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                                </Typography>
                                                <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                                    Read more
                                                </Button>
                                                <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                                    Leave a comment
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="body1">
                                        Một góc nhỏ mint chia sẻ kiến thức nhé
                                    </Typography>
                                </Box>
                                <Typography variant="h4" gutterBottom>
                                    Chuyên mục
                                </Typography>
                                <Select fullWidth label="Danh mục" sx={{ my: 2 }}>
                                    <MenuItem value="" disabled>
                                        Chọn danh mục
                                    </MenuItem>
                                    {categories.map((category) => (
                                        <MenuItem key={category.title} value={category.title}>
                                            {category.title} - Count: {category.count}
                                        </MenuItem>
                                    ))}
                                </Select>


                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="row text-start m-1">
                                        <div className="col-lg-4" >
                                            <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light" style={{ height: '80px', width: '150px' }}>
                                                <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" style={{ height: '80px', width: '100px' }} />
                                                <a href="#!">
                                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-lg-8  m-0 p-0">
                                            <CardContent>
                                                <Typography variant="h7" component="div">
                                                    [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                                </Typography>
                                            </CardContent>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </section >


                    <div className="row">

                        <div className="col-lg-5">
                            <Card>
                                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                    <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                    <a href="#!">
                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                    </a>
                                </div>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Typography>
                                    <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                        Read more
                                    </Button>
                                    <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                        Leave a comment
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-lg-4">
                            <Card>
                                <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
                                    <img src="https://mint07.com/wp-content/uploads/2023/07/cover-1-430x245.png" className="img-fluid" alt="Post" />
                                    <a href="#!">
                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                    </a>
                                </div>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        [Đại Tiệc Mỹ Phẩm Quốc Tế] SALE BOM TẤN UPTO 60% – QUÀ CỰC CHẤT
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Typography>
                                    <Button variant="contained" color="primary" sx={{ marginTop: '16px', mr: '20px' }}>
                                        Read more
                                    </Button>
                                    <Button variant="" color="secondary" sx={{ marginTop: '16px', fontSize: '10px' }}>
                                        Leave a comment
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="col-lg-3">

                        </div>
                    </div>

                </div>
            </main >

        </>
    );
}

export default Blog;
