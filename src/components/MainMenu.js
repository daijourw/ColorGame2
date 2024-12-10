import React from 'react';


/**
* MainMenu component that serves as the starting screen of the game.
* Allows the player to view the leaderboard, enter a username, and start the game.
*
* @param {Object} props - The component props.
* @param {string} props.username - The current username entered by the player.
* @param {function} props.setUsername - Function to update the player's username.
* @param {Array<{name: string, score: number}>} props.leaderboard - List of top players with their scores.
* @param {function} props.onStart - Callback to start the game.
* @returns {JSX.Element} The rendered MainMenu component.
*/


const MainMenu = ({ username, setUsername, leaderboard, onStart }) => {
 return (
   <div className="main-menu">
     <h1>Color Game</h1>


     {/* Instructions Section */}
     <div className="instructions">
       <h3>How to Play:</h3>
       <p>
         The Color Game tests your reflexes and ability to distinguish different colors. On the
         first round, you will start with <strong>3 seconds</strong>, and a grid of colors will
         display.
       </p>
       <p>
         Only one square in the grid will be a <strong>slightly different color</strong>. Choose
         the odd square that is a different color to gain extra time, a point, and advance to the
         next round.
       </p>
       <p>
         Each round will have a <strong>larger grid</strong> and a <strong>less distinguishable</strong> color. But be careful! If you choose the wrong square or run out of time, the game will be over.
       </p>
       <p>Press the play button to start!</p>
     </div>


     {/* Leaderboard Section */}
     <div className="leaderboard">
       <h2>Leaderboard</h2>
       <ul>
         {leaderboard.length === 0 ? (
           <li>No scores yet!</li>
         ) : (
           leaderboard.map((player, index) => (
             <li key={index}>
               {player.name}: {player.score}
             </li>
           ))
         )}
       </ul>
     </div>


     {/* Username Input */}
     <div className="username-input">
       <input
         type="text"
         placeholder="Enter your name"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
       />
     </div>


     {/* Play Button */}
     <button onClick={onStart}>Play</button>
   </div>
 );
};


export default MainMenu;
