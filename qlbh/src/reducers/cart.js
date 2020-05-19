import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];
const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            var index = state.findIndex((obj => obj.product.id === action.product.id));
            if (index > -1) {
                state[index] = {
                    ...state[index], quantity: state[index].quantity + action.quantity
                };

            } else {
                state.push({
                    product: action.product,
                    quantity: action.quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.REMOVE_FROM_CART:
            index = state.findIndex((obj => obj.product.id === action.id));
            if (index > -1) {
                state.splice(index, 1);
            } 
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];;
        default:
            return [...state];
    }

}

export default cart;