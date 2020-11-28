import React, { useState } from "react";
import Board from "../3-organisms/Board";

const Play = () => {
  const initValues = Array(9).fill(null);
  const initPlayer = () => ["X", "O"][Math.floor(Math.random() * 2)];

  const [values, setValues] = useState(initValues);
  const [currentPlayer, setPlayer] = useState(initPlayer);

  const handleClick = (id: number) => {
    const updated = [...values];
    updated[id] = currentPlayer;
    setValues(updated);
    setPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleClear = () => {
    setValues(initValues);
    setPlayer(initPlayer);
  };

  return (
    <>
      <Board handleClick={handleClick} values={values} />
      <button onClick={handleClear}>New Game</button>
      <div>Your move: {currentPlayer}</div>
    </>
  );
};

export default Play;
