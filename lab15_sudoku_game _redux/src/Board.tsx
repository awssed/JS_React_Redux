import React, { KeyboardEventHandler, useEffect, useState} from "react";
import { useHotkeys } from 'react-hotkeys-hook';
import Square from "./Square";
import Cell from "./Cell";
import {Dispatch} from "redux";
import cell from "./Cell";
import { log } from "node:util";
import { Simulate } from "react-dom/test-utils";
import keyDown = Simulate.keyDown;
import {checkCell, generateCells} from "./SudokuLogic";

const Board=({ dispatch }:{dispatch:Dispatch})=> {

  // Стейт для цвета клеток
  const cellColors=localStorage.getItem("")
  //Стэйт для значений в клетках
  const [cellValues, setCellValues] = useState(() =>
    Array.from({ length: 9 }, () => Array(9).fill(""))
  );
  //Текущая выбранная клетка
  const [selectedCell, setSelectedCell] = useState({
    squareNumber: -1,
    cellNumber: -1,
  });
  useHotkeys('g', clickNewGame);
  useHotkeys('h', ()=>{
    alert(help())
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const number = parseInt(event.key);
      if (
          !isNaN(number) &&
          selectedCell.squareNumber >= 0 &&
          selectedCell.cellNumber >= 0 &&
          cellValues[selectedCell.squareNumber][selectedCell.cellNumber] !==
          event.key && number!=0
      ) {
        const newCellValues = [...cellValues];
        newCellValues[selectedCell.squareNumber] = [
          ...newCellValues[selectedCell.squareNumber],
        ];
        newCellValues[selectedCell.squareNumber][
            selectedCell.cellNumber
            ] = event.key;
        setCellValues(newCellValues);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    clickCheck();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);

    };
  }, [selectedCell, cellValues]);
  function handleClick(squareNum: number, cellNum: number) {
    // Создаем новый массив цветов клеток
    // Создаем новый массив цветов клеток
    const newColors = Array.from({ length: 9 }, () =>
      Array(9).fill("transparent")
    );
    for (let i = 0; i < 9; i++) {
      newColors[squareNum][i] = "rgba(0, 0, 255, 0.3)";
    }
    const squareRow = Math.floor(squareNum / 3);
    const squareColumn = Math.floor(cellNum / 3);

    // Изменяем цвет всех клеток на той же строке
    for (let i = squareRow * 3; i < squareRow * 3 + 3; i++) {
      for (let j = squareColumn * 3; j < squareColumn * 3 + 3; j++) {
        newColors[i][j] = "rgba(0, 0, 255, 0.3)";
      }
    }
    // Изменяем цвет всех клеток на той же колонке
    const squareStart = squareNum % 3;
    const cellStart = cellNum % 3;
    for (let i = squareStart; i <= squareStart + 6; i = i + 3) {
      for (let j = cellStart; j <= cellStart + 6; j = j + 3) {
        newColors[i][j] = "rgba(0, 0, 255, 0.3)";
      }
    }
    setSelectedCell({ squareNumber: squareNum, cellNumber: cellNum });
    setCellColors(newColors);
  }

  const cells = [];
  //row и column испольщуются для грид разметки внутри square
  let row = 0;
  let column = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (row >= 3) {
        row = 0;
      }
      if (column >= 3) {
        column = 0;
      }

      cells.push(
        <Cell
          row={row}
          column={column}
          color={cellColors[i][j]}
          content={cellValues[i][j]}
          handleClick={() => handleClick(i, j)}
        />
      );

      column++;
      if (column % 3 === 0) {
        row++;
      }
    }
  }

  const squares = [];
  let cells_index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      squares.push(
        <Square
          key={`${i}-${j}`}
          row={i}
          column={j}
          cells={cells.slice(cells_index, cells_index + 9)}
        />
      );
      cells_index += 9;
    }
  }

  function clickCheck()
  {
    console.log('hello')
    let rightFlag=true;
    let newColors = Array.from({ length: 9 }, () =>
        Array(9).fill("transparent")
    );
    //перересовать выбранный столбец и строку
    if(selectedCell.squareNumber!=-1) {
      for (let i = 0; i < 9; i++) {
        newColors[selectedCell.squareNumber][i] = "rgba(0, 0, 255, 0.3)";
      }
      let squareRow = Math.floor(selectedCell.squareNumber / 3);
      let squareColumn = Math.floor(selectedCell.cellNumber / 3);

      // Изменяем цвет всех клеток на той же строке
      for (let i = squareRow * 3; i < squareRow * 3 + 3; i++) {
        for (let j = squareColumn * 3; j < squareColumn * 3 + 3; j++) {
          newColors[i][j] = "rgba(0, 0, 255, 0.3)";
        }
      }
      // Изменяем цвет всех клеток на той же колонке
      let squareStart = selectedCell.squareNumber % 3;
      let cellStart = selectedCell.cellNumber % 3;
      for (let i = squareStart; i <= squareStart + 6; i = i + 3) {
        for (let j = cellStart; j <= cellStart + 6; j = j + 3) {
          newColors[i][j] = "rgba(0, 0, 255, 0.3)";
        }
      }
    }
    for (let i=0;i<9;i++)
    {
      for(let j=0;j<9;j++)
      {
        if(cellValues[i][j]=='')
          rightFlag=false;
        if (!checkCell(i, j, cellValues)) {
          newColors[i][j] = "rgba(255, 0, 0, 0.3)";
          rightFlag = false;
          let squareStart = i - i % 3;
          let cellStart = j - j % 3;
          for (let q = squareStart; q < squareStart + 3; q++) {
            for (let k = cellStart; k < cellStart + 3; k++) {
              if(newColors[q][k]!="rgba(0, 0, 255, 0.3)")
                newColors[q][k] = "rgba(255, 0, 0, 0.3)";
            }
          }
          squareStart = i % 3;
          cellStart = j % 3;
          for (let q = squareStart; q <= squareStart + 6; q = q + 3) {
            for (let k = cellStart; k <= cellStart + 6; k = k + 3) {
              if(newColors[q][k]!="rgba(0, 0, 255, 0.3)")
                newColors[q][k] = "rgba(255, 0, 0, 0.3)";
            }
          }
        }
      }
    }
    if(rightFlag)
    {
      newColors = Array.from({ length: 9 }, () =>
          Array(9).fill("rgba(255,255,0,0.5)"));
    }
    setCellColors(newColors);
  }
  function clickNewGame()
  {
    const values=generateCells();
    setCellValues(values);
    const newColors = Array.from({ length: 9 }, () =>
        Array(9).fill("transparent")
    );
    setCellColors(newColors);
  }
  function help():number[]
  {
    let goodValues:number[]=[];
    if(selectedCell.squareNumber!==-1)
    {
      let origValue = cellValues[selectedCell.squareNumber][selectedCell.cellNumber]
      for (let i = 1;i<=9;i++)
      {
          cellValues[selectedCell.squareNumber][selectedCell.cellNumber]=i.toString();
          if(checkCell(selectedCell.squareNumber,selectedCell.cellNumber,cellValues))
          {
            goodValues.push(i);
          }
      }
      cellValues[selectedCell.squareNumber][selectedCell.cellNumber]=origValue;
    }
    return goodValues;
  }
  return (
    <>
      <div className="Board">{squares}</div>
      <button className="NewGame" onClick={clickNewGame}>New Game</button>
      <button className="Check"  onClick={clickCheck}>Check</button>
    </>
  );
}

export default Board;
