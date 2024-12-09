import React from 'react';

const GameOver = ({ score, onPlayAgain, onReturnToMenu }) => {
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      <p>Your score: {score}</p>
      <div>
        <button onClick={onPlayAgain}>Play Again</button>
        <button onClick={onReturnToMenu}>Return to Menu</button>
      </div>
    </div>
  );
};

export default GameOver;
