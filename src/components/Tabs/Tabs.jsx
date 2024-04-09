'use strict';
import './Tabs.css';
import Player from '../Lists/Player';
import GameBoard from '../GameBoard/GameBoard';

export default function Tabs() {
  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <Player playerName="Player 1" playerSymbol="X" />
          <Player playerName="Player 2" playerSymbol="O" />
        </ol>
        <GameBoard />
      </section>
      LOG
    </main>
  );
}
