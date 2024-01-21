import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
    const { product, index } = props;
    const statusName = product.quantity > 0 ? "Còn Hàng" : "Hết Hàng";

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
            <td>{product.quantity}</td> {/* Hiển thị thông tin tồn kho */}
            <td>
                <span className={`badge ${product.quantity > 0 ? 'bg-warning' : 'bg-danger'} text-dark`}>
                    {statusName}
                </span>
            </td>
            <td>
                <Link
                    to={`/product/${product.id}/edit`}
                    className="btn btn-success mr-10"
                >
                    Sửa
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                >
                    Xoá
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;
