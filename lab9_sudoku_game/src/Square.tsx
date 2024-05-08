import React, { useState } from "react";
import Cell, { CellProps } from "./Cell";

interface SquareProps {
  row: number;
  column: number;
  cells: React.ReactNode[];
}

function Square({ row, column, cells }: SquareProps) {
  return (
    <div
      className="Square"
      style={{
        gridRow: row + 1,
        gridColumn: column + 1,
        backgroundColor: "transparent",
      }}
    >
      {cells.map((cell) => cell)}
    </div>
  );
}

export default Square;
