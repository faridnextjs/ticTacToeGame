'use strict';
import { useState } from 'react';

export default function Player({ playerName, playerSymbol }) {
  const [button, setButton] = useState(false),
    [nameInput, setNameInput] = useState(playerName);

  // *you can use setButton(!players) but it will be scheduled, use the function form for the React
  const handleEdit = () => setButton((player) => !player),
    handleInput = (x) => setNameInput(x.target.value),
    handleSave = () => setButton((player) => !player),
    players = button ? (
      <input
        type="text"
        placeholder="your name"
        value={nameInput}
        // defaultValue={playerName}
        onChange={handleInput}
      />
    ) : (
      <span className="player-name">{nameInput}</span>
    );

  return (
    <li>
      <span className="player">
        {players}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={button ? handleSave : handleEdit}>
        {' '}
        {!button ? 'Edit' : 'Save'}
      </button>
    </li>
  );
}
