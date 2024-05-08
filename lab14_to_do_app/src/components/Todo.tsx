import React, { MouseEventHandler } from 'react';

interface TodoProps {
    onClick: MouseEventHandler<HTMLLIElement>;
    completed: boolean;
    text: string;
}

const Todo: React.FC<TodoProps> = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none',
        }}
    >
        {text}
    </li>
);

export default Todo;