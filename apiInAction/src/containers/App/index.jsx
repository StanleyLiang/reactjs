import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as reduxActions from '../../redux/actions/todoActions';
import './style.scss';

const propTypes = {
    actions: PropTypes.object,
    tasks: PropTypes.array,
    isFetching: PropTypes.bool
}

const App = (props) => {
    const { tasks, actions, isFetching } = props;
    const addTask = () => {
        actions.updateToDo('new task');
    }
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
            <button type="button" onClick={addTask}>add</button>
            {
                isFetching ? <p>fetching</p> : null
            }
        </div>
    );
};

App.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        tasks: state.todo.tasks,
        isFetching: state.todo.isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(reduxActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
