import {CELL_COLOR, CHECK_BOARD, CLICK_CELL, COLORS, ColorState, ValueActionType, ValueState} from "../Actions/actions";
import {checkCell} from "../SudokuLogic";

const InitialState:ColorState={
    colors:Array(9).fill(Array(9).fill(CELL_COLOR.WHITE))
}

export const  ColorReducer=(state:ColorState=InitialState,action:ValueActionType):ColorState=>{
    switch (action.type)
    {
        case CLICK_CELL:
            const newColors: COLORS[][] = Array.from({ length: 9 }, () =>
                Array(9).fill("transparent")
            );
            for (let i = 0; i < 9; i++) {
                newColors[action.i][i] = "rgba(0, 0, 255, 0.3)";
            }
            const squareRow = Math.floor(action.i / 3);
            const squareColumn = Math.floor(action.j / 3);

            // Изменяем цвет всех клеток на той же строке
            for (let i = squareRow * 3; i < squareRow * 3 + 3; i++) {
                for (let j = squareColumn * 3; j < squareColumn * 3 + 3; j++) {
                    newColors[i][j] = "rgba(0, 0, 255, 0.3)";
                }
            }
            // Изменяем цвет всех клеток на той же колонке
            const squareStart = action.i % 3;
            const cellStart = action.j % 3;
            for (let i = squareStart; i <= squareStart + 6; i = i + 3) {
                for (let j = cellStart; j <= cellStart + 6; j = j + 3) {
                    newColors[i][j] = "rgba(0, 0, 255, 0.3)";
                }
            }
            return {
                ...state,
                colors: newColors,
            };
        default:
            return state;
    }
}