import React from "react";

const OrderItem = (props) => {
    const { checkout, index, onUpdateStatus } = props;
    const statusName = checkout.status === "confirmed" ? "Đã xác nhận" : "Chưa xác nhận";

    return (
        <>
            {checkout.products.map((product, productIndex) => (
                <tr key={`${index}-${productIndex}`}>
                    <td>{index + 1}</td>
                    <td>
                        <img
                            src={product.images[0]}
                            alt={`Product ${index + 1}`}
                            style={{ width: '50px', height: '50px' }}
                        />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.price * product.quantity}</td>
                    <td>
                        <span className={`badge ${checkout.status === "confirmed" ? 'bg-success' : 'bg-warning'} text-dark`}>
                            {statusName}
                        </span>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default OrderItem;
