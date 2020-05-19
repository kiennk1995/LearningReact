import * as types from './../constants/ActionType';
import * as messages from './../constants/Messages';

var initialState = messages.MES_CART_EMPTY;
const message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return [...state];
        default:
            return [...state];
    }

}

export default message;