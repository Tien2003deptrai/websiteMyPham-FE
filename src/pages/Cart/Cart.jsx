import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { __clearCart, __deleteItem, __updateQuantity } from './../../redux/actions/actionProduct';
import { postData } from './../../hook/useFetch';

const Cart = () => {
    const [userInfo, setUserInfo] = useState({
        country: "",
        city: "",
        phone: "",
    });
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const state = useSelector((state) => state) || [];
    console.log("Cart State:", state);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(__deleteItem(item));
        console.log("Updated State:", state);
    }

    const handleIncreaseQuantity = (item) => {
        dispatch(__updateQuantity(item.id, item.quantity + 1));
    }


    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(__updateQuantity(item.id, item.quantity - 1));
        }
    }

    const handleCheckout = async () => {
        try {
            const storedUser = localStorage.getItem('user');
            const user = storedUser ? JSON.parse(storedUser) : null;

            if (!user) {
                console.error('User not logged in.');
                return;
            }

            const total = state.reduce((acc, item) => {
                const itemTotal = item.price * item.quantity;
                return isNaN(itemTotal) ? acc : acc + itemTotal;
            }, 0);

            const checkoutData = {
                products: state.map(product => ({
                    product: product._id,
                    name: product.title,
                    quantity: product.quantity,
                    price: product.price,
                    images: product.images[0],
                })),
                user: {
                    _id: user._id,
                    name: user.name,
                },
                total: total.toFixed(2),
            };

            localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

            const response = await postData('/checkout', checkoutData);

            console.log('Response Data:', response);

            if (response && response.success !== undefined) {
                if (response.success) {
                    console.log('Success checkout:', response.message);

                    dispatch(__clearCart());
                } else {
                    console.error('Error during checkout:', response.message);
                }
            } else {
                console.error('Invalid response structure during checkout:', response);
            }

        } catch (error) {
            console.log('Error during checkout:', error);
        }
    };

    const productItems = state.map((item) => (
        <div className="card mb-3" key={item.id}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img src={item.images[0]} className="img-fluid rounded-3" alt="Shopping item" style={{ width: 85 }} />
                        </div>
                        <div className="ms-3">
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div className="input-group" style={{ width: 120 }}>
                            <button className="btn btn-outline-secondary" type="button" onClick={() => handleDecreaseQuantity(item)}>-</button>
                            <span className="form-control text-center">{item.quantity}</span>
                            <button className="btn btn-outline-secondary" type="button" onClick={() => handleIncreaseQuantity(item)}>+</button>
                        </div>
                        <div style={{ width: 80 }}>
                            <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <button className="btn btn-outline-danger" onClick={() => handleClose(item)}><i className="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        </div>
    ));
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const total = state.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;
        return isNaN(itemTotal) ? acc : acc + itemTotal;
    }, 0);


    return (
        <>
            <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
                <div className="container mt-5 py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3"><Link to={'/'} className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Continue shopping</Link></h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have {state.length} items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                                                </div>
                                            </div>
                                            {productItems}
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="card bg-black text-white rounded-3">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 className="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" className="img-fluid rounded-3" style={{ width: 45 }} alt="Avatar" />
                                                    </div>
                                                    <form>
                                                        <div className="mb-4">
                                                            {/* <label htmlFor="typeName" className="form-label">Cardholder's Name</label>
                                                            <input type="text" id="typeName" className="form-control form-control-lg" size={17} placeholder="Cardholder's Name" /> */}
                                                            <div className="mb-4">
                                                                <label htmlFor="typeName" className="form-label">Cardholder's Name</label>
                                                                <input
                                                                    type="text"
                                                                    id="typeName"
                                                                    className="form-control form-control-lg"
                                                                    size={17}
                                                                    placeholder="Cardholder's Name"
                                                                    value={user ? user.name : ''}
                                                                    readOnly  // Prevent user from changing their name in this field
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="mb-4">
                                                            <label htmlFor="country" className="form-label">Country:</label>
                                                            <input type="text" id="country" name="country" placeholder="Country . . ."
                                                                value={userInfo.country}
                                                                onChange={handleInputChange}
                                                                className="form-control form-control-lg"
                                                            />
                                                        </div>

                                                        <div className="mb-4">
                                                            <label htmlFor="city" className="form-label">City:</label>
                                                            <input type="text" id="city" name="city" placeholder="City . . ."
                                                                value={userInfo.city}
                                                                onChange={handleInputChange}
                                                                className="form-control form-control-lg"
                                                            />
                                                        </div>

                                                        <div className="mb-4">
                                                            <label htmlFor="phone" className="form-label">Phone:</label>
                                                            <input type="text" id="phone" name="phone" placeholder="1234 5678 9012 3457"
                                                                value={userInfo.phone}
                                                                onChange={handleInputChange}
                                                                className="form-control form-control-lg"
                                                            />
                                                        </div>
                                                    </form>

                                                    <button type="button" className="btn btn-info btn-block btn-lg"
                                                        onClick={handleCheckout}
                                                    >
                                                        <div className="d-flex justify-content-between">
                                                            <span>${total.toFixed(2)}</span>
                                                            <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2" /></span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card mb-4 mb-lg-0 text-center">
                <div className="card-body">
                    <p><strong>We accept</strong></p>
                    {/* ... (payment icons) ... */}
                    <img className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa" />
                    <img className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                        alt="American Express" />
                    <img className="me-2" width="45px"
                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard" />
                </div>
            </div>
        </>
    );
}

export default Cart;
