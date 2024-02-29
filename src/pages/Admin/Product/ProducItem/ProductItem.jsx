import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActionProduct from './../ActionProduct/ActionProduct';

const ProductItem = (props) => {
    const { product, index } = props;
    const [showActionProduct, setShowActionProduct] = useState(false);
    const statusName = product.quantity > 0 ? "Còn Hàng" : "Hết Hàng";

    const handleAddProductClick = () => {
        setShowActionProduct(true);
    };

    const onDelete = (id) => {
        props.onDelete(id);
    }

    return (
        <tr>
            <td>{product.id}</td>
            <td>
                <img
                    src={product.images[0]}
                    alt={`Product ${index + 1}`}
                    style={{ width: '50px', height: '50px' }}
                />
            </td>
            <td>{product.title}</td>
            <td>{product.brand}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
            <td>
                <span className={`badge ${product.quantity > 0 ? 'bg-warning' : 'bg-danger'} text-dark`}>
                    {statusName}
                </span>
            </td>
            <td>

                <Link
                    to={`/product/update/${product.id}`}
                    className="btn btn-success"
                >
                    Sửa
                </Link>
                <button
                    type="button"
                    className="btn btn-danger ms-3"
                >
                    Xoá
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;
