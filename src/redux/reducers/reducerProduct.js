import * as Types from '../constrants/actionTypes';

const loadFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('product')) || [];
}

const saveToLocalStorage = (products) => {
    localStorage.setItem('product', JSON.stringify(products));
}

const rootReducer = (state = loadFromLocalStorage(), action) => {
    console.log('Current State:', state); // Log the current state
    console.log('Action:', action);

    switch (action.type) {
        // case Types.ADD_PRODUCT:
        //     const newProductAdd = [...state, { ...action.payload, quantity: 1 }]; // Set initial quantity to 1
        //     saveToLocalStorage(newProductAdd);
        //     return newProductAdd;
        case Types.ADD_PRODUCT:
            const newProductAdd = [...state, { ...action.payload, quantity: 1 }]; // Set initial quantity to 1
            saveToLocalStorage(newProductAdd);
            console.log('New State after ADD_PRODUCT:', newProductAdd);
            return newProductAdd;


        case Types.DELETE_PRODUCT:
            console.log('Reducer: Đang xóa sản phẩm khỏi trạng thái', action.payload.id);
            const newProductDelete = Array.isArray(state) ? state.filter((product) => product.id !== action.payload.id) : [];
            saveToLocalStorage(newProductDelete);
            return newProductDelete;

        case Types.UPDATE_QUANTITY:
            const { id, quantity } = action.payload;
            const newQuantity = Math.max(1, Number(quantity)); // Ensure quantity is at least 1 and convert to number
            const updatedState = state.map(product => {
                if (product.id === id) {
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });

            // Kiểm tra xem updatedState có thay đổi so với state không
            if (JSON.stringify(updatedState) !== JSON.stringify(state)) {
                saveToLocalStorage(updatedState);
            }

            return updatedState;

        case Types.CLEAR_CART:
            saveToLocalStorage([]);
            return [];
        default:
            return state;
    }
}

export default rootReducer;