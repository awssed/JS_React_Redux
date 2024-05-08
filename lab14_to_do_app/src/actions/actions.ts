
let nextTodoOd=0;

export const ADD_TODO="ADD_TODO";
export const SET_VISIBILITY_FILTER="SER_VISIBILITY_FILTER";
export const TOGGLE_TODO="TOGGLE_TODO";
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export type VisibilityFilter="SHOW_ALL"|"SHOW_COMPLETED"|"SHOW_ACTIVE"

export const addTodoAC=(text:string)=>({type:ADD_TODO, id:nextTodoOd++, text} as const)
export const setVisibilityFilterAC=(filter:VisibilityFilter)=>({type:SET_VISIBILITY_FILTER, filter} as const)
export const toggleTodo=(id:typeof nextTodoOd)=>({type:TOGGLE_TODO, id} as const)

export type ActionTodoType=ReturnType<typeof addTodoAC>|
    ReturnType<typeof toggleTodo>
export type ActionFilterType=ReturnType<typeof setVisibilityFilterAC>

export type TodoType={
    id:number,
    text:string,
    completed:boolean
}
export type TodoState={
    todos:TodoType[]
}
export type VisibilityFilterState={
    visibilityFilter:VisibilityFilter
}