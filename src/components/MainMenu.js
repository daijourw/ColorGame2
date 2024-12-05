import React from 'react';

const MainMenu = ({ username, setUsername, leaderboard, onStart }) => {
  return (
    <div className="main-menu">
      <h1>Color Game</h1>

      <div style={{ padding: '10px', fontSize: '18px', color: '#333', maxWidth: '60%', margin: 'auto',}}>
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
      <div className="username-input">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button onClick={onStart}>Play</button>
    </div>
  );
};

export default MainMenu;