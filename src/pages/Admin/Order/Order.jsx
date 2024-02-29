import React, { useEffect, useState } from 'react';
import { getData } from '../../../hook/useFetch';
import OrderItem from './OrderItem/OrderItem';
import OrderList from './OrderList/OrderList';

const Order = () => {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        const fetchCheckouts = async () => {
            try {
                const response = await getData('admin/checkout');

                if (response.data.success) {
                    setCheckouts(response.data.checkouts);
                } else {
                    console.error('Error fetching checkouts:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching checkouts:', error);
            }
        };

        fetchCheckouts();
    }, []);

    const showProducts = (checkouts) => {
        return checkouts.map((checkout, index) => (
            <OrderItem
                key={index}
                checkout={checkout}
                index={index}
            />
        ));
    };

    return (
        <div>
            <h2>Quản lý đơn hàng</h2>
            <div className='col-xs-12 col-md-12 col-lg-12'>
                <OrderList>{showProducts(checkouts)}</OrderList>
            </div>
        </div>
    );
};

export default Order;
