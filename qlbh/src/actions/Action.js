import * as types from './../constants/ActionType';

export const actAddToCard = (product,quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actRemoveFromCard = (id) => {
    return {
        type : types.REMOVE_FROM_CART,
        id,
    }
}

export const actChangeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message,
    }
}