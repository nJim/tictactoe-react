import React from "react";
import ControlCount from "../2-molecules/ControlCount";
import ControlPlayer from "../2-molecules/ControlPlayer";
import ControlReset from "../2-molecules/ControlReset";
import ControlWinner from "../2-molecules/ControlWinner";
import "./Controls.css";

const Controls = ({player, winner, handleClear, turn}: Props) => {
  return (
    <div className="controls">
      <ControlCount turn={turn}/>
      { winner
        ? <ControlWinner winner={winner}/>
        : <ControlPlayer player={player}/>
      }
      <ControlReset handleClear={handleClear}/>
    </div>
  );
}

type Props = {
  player: string,
  winner?: string|undefined,
  handleClear: () => void,
  turn: number
}

export default Controls;
