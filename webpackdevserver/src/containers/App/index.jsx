import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const propTypes = {}

const App = (props) => {
    const { tasks } = props;
    return (
        <div className="app">
            <h1>Hello React</h1>
            <ul>
                {
                    tasks.map((t, index) => {
                        return <li key={index}>{t}</li>;
                    })
                }
            </ul>
        </div>
    );
};

App.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        tasks: state.todo.tasks
    };
}

export default connect(mapStateToProps)(App);
