import {combineReducers} from "redux";
import {valueReducer} from "./valueReducer";
import {ColorReducer} from "./colorReducer";
import {selectReducer} from "./selectReducer";
export default combineReducers({
    values:valueReducer,
    color:ColorReducer,
    select:selectReducer
})