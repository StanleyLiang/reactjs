import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducers from './redux/reducers';

const store = createStore(reducers);

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