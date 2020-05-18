import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action)
            return [...state];
        default:
            return [...state];
    }

}

export default cart;