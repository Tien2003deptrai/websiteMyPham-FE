import React from "react";

const ProductList = (props) => {
    return (
        <div className="card mt-4">
            <div className="card-header bg-primary text-white">
                <h4 className="card-titl ">Quản lý sản phẩm</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th className="col-xs-1 col-md-1">ID</th>
                                <th className="col-xs-1 col-md-1">Images</th>
                                <th className="col-xs-2 col-md-2">Tên</th>
                                <th className="col-xs-2 col-md-2">Thương hiệu</th>
                                <th className="col-xs-1 col-md-1">Giá</th>
                                <th className="col-xs-1 col-md-1">Tồn kho</th> {/* Thêm dòng này */}
                                <th className="col-xs-1 col-md-1">Trạng thái</th>
                                <th className="col-xs-3 col-md-3">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>{props.children}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
