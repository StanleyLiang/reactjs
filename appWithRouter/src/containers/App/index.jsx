import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import './style.scss';

const propTypes = {}

const App = (props) => {
    const { tasks, location } = props;
    console.log(window.location.pathname);
    return (
        <div className="app">
            <h1>Hello React</h1>
            <ul>
                {
                    tasks.map((t, index) => {
                        return (
                            <li key={index}>
                                <Link to={`${window.location.pathname}/${index}`}>{t}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            <Switch>
                <Route
                    path={`${window.location.pathname}/:index`}
                    render={(routeProps) => {
                        const { index } = routeProps.match.params;
                        return <h2>{index}</h2>;
                    }}
                />
            </Switch>
            
        </div>
    );
};

App.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        tasks: state.todo.tasks
    };
}

export default withRouter(connect(mapStateToProps)(App));
