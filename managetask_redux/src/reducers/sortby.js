import * as types from './../constants/ActionType';


var initialState = {
    sortBy : '',
    sortValue : '',
};
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SORTBY:
            return action.sortby;
        default:
            return state;
    }
}

export default myReducer;