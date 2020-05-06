import * as types from './../constants/ActionType';


var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + s4() + s4() + s4();
}


var tasks = JSON.parse(localStorage.getItem('tasks'));
var initialState = tasks ?? [];
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            console.log(action);

            var data = action.task;
            if (data.id) {
                var index = state.findIndex((obj => obj.id === data.id));
                if (index >= 0) {
                    state[index].name = data.name;
                    state[index].status = data.status;
                }
            }
            else if (data.name) {
                data.id = generateID();
                state.push(data);
                localStorage.setItem('tasks', JSON.stringify(state));
            }
            return [...state];
        default:
            return state;
    }
}

export default myReducer;