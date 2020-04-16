import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import App from './containers/App';
import createRootReducer from './redux/reducers';

const history = createBrowserHistory();
const configureStore = (preloadedState) => {
    const store = createStore(
        createRootReducer(history), // root reducer with router state
        preloadedState,
        compose(
            applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            // ... other middlewares ...
            ),
        ),
    )
    return store
};

const store = configureStore({});
  

function root() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>
    );
}

ReactDOM.render(
    root(),
    document.getElementById('content'),
    () => {}
);