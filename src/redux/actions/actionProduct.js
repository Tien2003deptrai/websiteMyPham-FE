import { sendToast } from "../../config/configToast"
import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_QUANTITY, CLEAR_CART } from "../constrants/actionTypes"

export const __addItem = (product) => {
    sendToast('Successfully added to cart list.');
    return {
        type: ADD_PRODUCT,
        payload: { ...product, quantity: 1 }
    }
}

export const __deleteItem = (productId) => {
    sendToast('Successfully removed from the cart.');
    return {
        type: DELETE_PRODUCT,
        payload: productId
    }
}

export const __updateQuantity = (id, quantity) => {
    sendToast('Successfully updated from the cart.');
    return {
        type: UPDATE_QUANTITY,
        payload: { id, quantity },
    };
};

export const __clearCart = () => {
    // sendToast('Successfully cleared from the cart.');
    return {
        type: CLEAR_CART,
        payload: [],
    };
};