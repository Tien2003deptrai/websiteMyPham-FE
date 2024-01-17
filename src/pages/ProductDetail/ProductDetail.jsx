import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthUser } from '../../context/authContext';
import { useParams } from 'react-router';


// const ProductDetail = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { getData } = AuthUser();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 getData(`/products/${id}`)
//                     .then((data) => {
//                         console.log(data);
//                         setProduct(data.data);
//                     })
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     return (
//         <>
//             return (
//             <>
//                 <div className="row d-flex justify-content-center py-5">
//                     <div className="col-md-12">
//                         <NavLink className="text-decoration-none text-dark" to={`/`}>
//                             <div className="d-flex align-items-center m-3">
//                                 <i className="fa fa-long-arrow-left"></i>
//                                 <span className="ml-1">&nbsp;Back</span>
//                             </div>
//                         </NavLink>
//                         <div>
//                             <div className="row">
//                                 <div className="col-md-6">
//                                     <div className="images p-3">
//                                         <div className="text-center p-4">
//                                             <img id="main-image" alt="product" src={product.images} width="250" />
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-6">
//                                     <div className="border p-4">
//                                         <div className="mt-4 mb-3">

//                                             <span className="text-muted text-capitalize">{product.category}</span>

//                                             <h5 className="text-uppercase">
//                                                 {product.title}
//                                             </h5>

//                                             Rating {product.rating}
//                                             <i className="fa fa-star text-warning"></i>

//                                             <div className="price d-flex flex-row align-items-center">
//                                                 <big className="display-6"><b>${product.price}</b></big>
//                                             </div>
//                                         </div>
//                                         <p className="text-muted">{product.description}</p>
//                                         <div className="cart mt-4 align-items-center">
//                                             <button className="btn btn-outline-dark text-uppercase mr-2 px-4">By now</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//             )
//         </>
//     )
// }

// export default ProductDetail
// ... (previous imports)

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { getData } = AuthUser();

    useEffect(() => {
        const fetchData = async () => {
            try {
                getData(`/products/${id}`)
                    .then((data) => {
                        console.log(data);
                        setProduct(data.data);
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                        setLoading(false);
                    });
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [getData, id]);

    return (
        <div className="row d-flex justify-content-center py-5">
            <div className="col-md-12">
                <NavLink className="text-decoration-none text-dark" to={`/`}>
                    <div className="d-flex align-items-center m-3">
                        <i className="fa fa-long-arrow-left"></i>
                        <span className="ml-1">&nbsp;Back</span>
                    </div>
                </NavLink>
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="images p-3">
                                <div className="text-center p-4">
                                    {product.images && product.images.map((imageUrl, index) => (
                                        <img key={index} alt={`product-${index}`} src={imageUrl} width="250" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="border p-4">
                                <div className="mt-4 mb-3">

                                    <span className="text-muted text-capitalize">{product.category}</span>

                                    <h5 className="text-uppercase">
                                        {product.title}
                                    </h5>

                                    Rating {product.rating}
                                    <i className="fa fa-star text-warning"></i>

                                    <div className="price d-flex flex-row align-items-center">
                                        <big className="display-6"><b>${product.price}</b></big>
                                    </div>
                                </div>
                                <p className="text-muted">{product.description}</p>
                                <div className="cart mt-4 align-items-center">
                                    <button className="btn btn-outline-dark text-uppercase mr-2 px-4">By now</button>
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
