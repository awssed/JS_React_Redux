import exp from "node:constants";

export const CLICK_CELL="CLICK_CELL";
export const CHECK_BOARD="CHECK_BOARD"
export const CHANGE_VALUE="CHANGE_VALUE";
export const SET_SELECTED="SET_SELECTED";

export const CELL_COLOR={
    RED:"rgba(255, 0, 0, 0.3)",
    WHITE:"transparent",
    YELLOW:"rgba(255,255,0,0.5)",
    BLUE:"rgba(0, 0, 255, 0.3)",
}
export type COLORS="rgba(255, 0, 0, 0.3)"|"transparent"|"rgba(255,255,0,0.5)"|"rgba(0, 0, 255, 0.3)"
export type SELECTED_CELL={
    squareNumber:number,
    cellNumber:number
}
export const clickAC=(i:number,j:number)=>({type:CLICK_CELL, i, j})
export const checkAC=()=>({type:CHECK_BOARD})
export const valueAC=(value:number,i:number,j:number)=>({type:CHANGE_VALUE, i, j, value})
export const selectedAC=(selected:SELECTED_CELL)=>({type:SET_SELECTED, selected})

export type ColorActionType=ReturnType<typeof clickAC>|ReturnType<typeof checkAC>
export type ValueActionType=ReturnType<typeof valueAC>
export type SelectedActionType=ReturnType<typeof selectedAC>

export type ColorState = {
    colors: COLORS[][];
};

export type ValueState = {
    values: number[][];
};

export type SelectedState = {
    cell:SELECTED_CELL
};