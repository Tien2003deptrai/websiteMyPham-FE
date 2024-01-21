import React from "react";

const OrderList = (props) => {
    return (
        <div className="card mt-4">
            <div className="card-header bg-primary text-white">
                <h4 className="card-title">Danh sách sản phẩm</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th className="col-xs-1 col-md-1">ID</th>
                                <th className="col-xs-1 col-md-1">Img</th>
                                <th className="col-xs-1 col-md-1">Name</th>
                                <th className="col-xs-1 col-md-1">Quantity</th>
                                <th className="col-xs-1 col-md-1">Price</th>
                                <th className="col-xs-1 col-md-1">Total</th>
                                <th className="col-xs-3 col-md-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>{props.children}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderList;
