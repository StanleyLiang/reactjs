import * as types from '../constants/todoTypes';

const initialState = {
    tasks: [
        'house clean',
        'loundry service',
        'work out',
        'hot reload'
    ],
    isFetching: false
};

const todo = (state = initialState, action) => {
    switch (action.type) {
    case types.UPDATE_TODOS_START: {
        return Object.assign({}, state, { isFetching: true });
    }
    case types.UPDATE_TODOS:
        const tasks = [...state.tasks, action.task];
        return Object.assign({}, state, { tasks, isFetching: false });
    default:
        return state;
    }
};

export default todo;
