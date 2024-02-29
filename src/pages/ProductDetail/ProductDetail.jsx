import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthUser } from '../../context/authContext';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { __addItem, __deleteItem } from '../../redux/actions/actionProduct';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { getData } = AuthUser();
    const cart = useSelector((state) => state.rootReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(`/products/${id}`);
                console.log(data);
                setProduct(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleCart = () => {
        const isInCart = cart && cart.some((item) => item.id === product.id);

        if (isInCart) {
            console.log('Updating quantity in cart:', product);
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            dispatch({ type: 'UPDATE_QUANTITY', payload: updatedCart });
        } else {
            console.log('Adding to cart:', product);
            dispatch(__addItem(product));
        }
    };


    return (
        <div className="row d-flex justify-content-center py-5 mt-5">
            <div className="col-md-12">
                <NavLink className="text-decoration-none text-danger" to={`/`}>
                    <div className="d-flex align-items-center m-3">
                        <i className="fa fa-long-arrow-left"></i>
                        {/* <span className="ml-1 mt-3">&nbsp;Back - Trang chủ</span> */}
                    </div>
                </NavLink>
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images p-3">
                                <div className="text-center p-4">
                                    {product.images && product.images.length > 0 && (
                                        <img src={product.images[0]} width="250" alt="Product" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mr-2">
                            <div className="border p-4">
                                <div className="mt-4 mb-3 ms-3">
                                    <span className="text-muted text-capitalize">{product.category}</span>
                                    <h5 className="text-uppercase">{product.title}</h5>
                                    Rating {product.rating}
                                    <i className="fa fa-star text-warning"></i>
                                    <div className="price d-flex flex-row align-items-center">
                                        <big className="display-6"><b>${product.price}</b></big>
                                    </div>
                                </div>
                                <p className="text-muted">{product.description}</p>
                                <div className="cart mt-4 align-items-center">
                                    <button onClick={handleCart} className="btn btn-primary text-uppercase mr-2 px-4">
                                        {cart && cart.some((item) => item.id === product.id) ? 'Remove from cart' : 'Add to cart'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2    ">
                        <div className="col-md-3">
                            <div className="images p-3">
                                <div className="text-center p-4">
                                    {product.images && product.images.length > 0 && (
                                        <img src={product.images[1]} width="250" alt="Product" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="images p-3">
                                <div className="text-center p-4">
                                    {product.images && product.images.length > 0 && (
                                        <img src={product.images[2]} width="250" alt="Product" />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="images p-3">
                                <div className="text-center p-4">
                                    {product.images && product.images.length > 0 && (
                                        <img src={product.images[3]} width="250" alt="Product" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
