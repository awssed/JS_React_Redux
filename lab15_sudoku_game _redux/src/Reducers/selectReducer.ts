import {
    SELECTED_CELL,
    SelectedActionType,
    SelectedState,
    ValueActionType,
    ValueState
} from "../Actions/actions";

const InitialState:SelectedState={
    cell:{
        squareNumber:-1,
        cellNumber:-1
    }
}
export const selectReducer=(state:SelectedState,action:SelectedActionType):SelectedState=>
{
    switch(action.type){
        case "SET_SELECTED":
            const newSelect:SELECTED_CELL=action.selected;
            return {
                ...state,
                cell:newSelect
            }
        default:
            return state;
    }
}