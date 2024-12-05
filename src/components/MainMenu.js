import React from 'react';

const MainMenu = ({ username, setUsername, leaderboard, onStart }) => {
  return (
    <div className="main-menu">
      <h1>Color Game</h1>
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