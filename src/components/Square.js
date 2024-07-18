import React from "react";
import "./Square.css"
function Square({ chooseSquare, val }) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
