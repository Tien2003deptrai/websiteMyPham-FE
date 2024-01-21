import { toast } from "react-toastify";
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_QUANTITY, CLEAR_CART } from "../constrants/actionTypes"

export const __addItem = (product) => {
    console.log('Adding item to cart:', product);

    toast.success('Successfully added to favorites rooms list.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })

    return {
        type: ADD_PRODUCT,
        payload: { ...product, quantity: 1 }
    }
}


export const __deleteItem = (productId) => {
    toast.success('Successfully removed from the cart.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    return {
        type: DELETE_PRODUCT,
        payload: productId
    }
}

export const __updateQuantity = (id, quantity) => {
    return {
        type: UPDATE_QUANTITY,
        payload: { id, quantity },
    };
};

export const __clearCart = () => {
    console.log('Dispatching __clearCart action');
    return {
        type: CLEAR_CART,
        payload: [],
    };
};