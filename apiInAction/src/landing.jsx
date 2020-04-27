import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './containers/App';
import reducers from './redux/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

function root() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(
    root(),
    document.getElementById('content'),
    () => {}
);