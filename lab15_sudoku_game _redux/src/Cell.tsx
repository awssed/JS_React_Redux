import React, { useState } from "react";
export interface CellProps {
  row: number;
  column: number;
  color: string;
  handleClick: () => void;
  content: string;
}

function Cell({ row, column, color, handleClick, content }: CellProps) {
  return (
    <div
      className="Cell"
      onClick={handleClick}
      style={{
        gridRow: row + 1,
        gridColumn: column + 1,
        backgroundColor: color,
      }}
    >
        <p>{content}</p>
    </div>
  );
}
export default Cell;
