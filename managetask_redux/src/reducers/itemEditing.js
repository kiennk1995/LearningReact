import * as types from './../constants/ActionType';


var initialState = {
    id: '',
    name: '',
    status: true
};
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;
        case types.CLEAR_TASK:
            return {
                id: '',
                name: '',
                status: true
            }
        default:
            return state;
    }
}

export default myReducer;