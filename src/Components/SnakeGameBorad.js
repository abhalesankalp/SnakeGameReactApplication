import React from "react";
import SnakeDiv from "./Snake";
class SnakeGameBoard extends React.Component {
  render() {
    return (
      <div className="GameBoard">
        <SnakeDiv />
        <button className="ButtonCSS" name="StartGame" title="Start Game">
          "Start Game"
        </button>
      </div>
    );
  }
}

export default SnakeGameBoard;
