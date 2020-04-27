import * as types from '../constants/todoTypes';

export const updateToDo = (task) => {
    const action = () => {
        return {
            type: types.UPDATE_TODOS,
            task
        };
    };
    const start = () => {
        return {
            type: types.UPDATE_TODOS_START
        };
    };
    return (dispatch) => {
        dispatch(start());
        setTimeout(() => {
            dispatch(action(task));    
        }, 3000);
    };
};