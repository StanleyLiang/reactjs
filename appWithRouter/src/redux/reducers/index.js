import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import todo from './todo';

const createRootReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        todo
    });
};

export default createRootReducer;
