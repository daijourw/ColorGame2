import React from 'react';


/**
* GameOver component that displays when the player loses the game.
* Provides options to play again or return to the main menu.
*
* @param {Object} props - The component props.
* @param {number} props.score - The player's final score.
* @param {function} props.onPlayAgain - Callback to restart the game.
* @param {function} props.onReturnToMenu - Callback to return to the main menu.
* @returns {JSX.Element} The rendered GameOver component.
*/


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