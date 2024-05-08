import {ValueActionType, ValueState} from "../Actions/actions";

const initialState:ValueState = {
    values:Array(9).fill(Array(9).fill(""))
}

export const valueReducer = (state:ValueState = initialState,action:ValueActionType)=>{
    switch(action.type){
        case "CHANGE_VALUE":
            const newValues = state.values.map((row) => [...row]);
            newValues[action.i][action.j] = action.value;
            return {
                ...state,
                values:newValues
            }
        default:
            return state;
    }
}