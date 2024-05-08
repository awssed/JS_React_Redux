import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import {VisibilityFilters, toggleTodo, TodoType, VisibilityFilter} from "../actions/actions";
import {Dispatch} from "redux";
import {StoreType} from "../index";

const getVisibleTodos = (todos:TodoType[], filter:VisibilityFilter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter((t:TodoType) => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((t:TodoType) => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = (state: StoreType) => ({
    todos: getVisibleTodos(
        state.todos.todos,
        state.visibilityFilter.visibilityFilter
    ),
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
    toggleTodo: (id:number) => dispatch(toggleTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);