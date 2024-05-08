import {
    ActionFilterType,
    SET_VISIBILITY_FILTER,
    TodoState,
    VisibilityFilters,
    VisibilityFilterState
} from "../actions/actions";
const initialVisibilityFilterState: VisibilityFilterState = {
    visibilityFilter:"SHOW_ALL"
};
export const visibilityFilterReducer = (state: VisibilityFilterState=initialVisibilityFilterState, action: ActionFilterType): VisibilityFilterState => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter
            };
        default:
            return state;
    }
};