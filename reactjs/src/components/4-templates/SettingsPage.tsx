import React from "react";
import RadioButtons from "../3-organisms/RadioButtons";
import Border from "../3-organisms/Border";
import PlayerSelect from "../3-organisms/PlayerSelect";
import { useAppContext } from "../../lib/hooks/useAppContext";
import { icons } from "../../lib/assets/icons";

const SettingsPage = () => {
  // The state and dispatcher used for app-wide storage.
  const {state, dispatch} = useAppContext();

  // Update app state when changing player icons.
  const onChange = (e:any) => {
    dispatch({
      type: 'SET_PLAYER_ICON',
      player: e.currentTarget.name,
      icon: e.currentTarget.value
    });
  };

  return (
    <Border>
      <div>
        <PlayerSelect title="Player One">
          <RadioButtons
            name="icon1"
            icons={icons.player1}
            onChange={onChange}
            active={state.icon1}
          />
        </PlayerSelect>
        <PlayerSelect title="Player Two">
          <RadioButtons
            name="icon2"
            icons={icons.player2}
            onChange={onChange}
            active={state.icon2}
          />
        </PlayerSelect>
      </div>
    </Border>
  )
};

export default SettingsPage;
