import React from 'react';
import PropTypes from 'prop-types';
import {TodoType} from "../actions/actions";
import Todo from "./Todo";


interface TodoListProps {
    todos: TodoType[];
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map((todo) => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
            />
        ))}
    </ul>
);

export default TodoList;