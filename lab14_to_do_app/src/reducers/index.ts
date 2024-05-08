import {combineReducers} from "redux";
import {visibilityFilterReducer} from "./visibilityFilter";
import {todosReducer} from "./todos";
export default combineReducers({
        todos: todosReducer,
        visibilityFilter:visibilityFilterReducer
    }
)