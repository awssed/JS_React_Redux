import {
    ActionFilterType,
    ActionTodoType,
    ADD_TODO,
    addTodoAC, SET_VISIBILITY_FILTER,
    TodoState, TodoType,
    VisibilityFilterState
} from "../actions/actions";
import Todo from "../components/Todo";

const initialState: TodoState = {
    todos: []
};

export const todosReducer = (state: TodoState = initialState, action: ActionTodoType): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo: TodoType = {
                id: action.id,
                text: action.text,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case 'TOGGLE_TODO':
            return{todos: state.todos.map((todo:TodoType) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )}
        default:
            return state;
    }
};

