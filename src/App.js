import React, { useState, useEffect } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Countdown from './components/Countdown';
import Board from './components/Board';


function App() {

  // track which screen to show: main menu, or countdown, or game
  const [screen, setScreen] = useState('menu');
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setLeaderboard(storedLeaderboard);
  }, []);

  useEffect(() => {
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  const handleStart = () => {
    if (!username.trim()) {
      alert('Enter a username to play!');
      return;
    }
    setScreen('game');
    setRound(1);
    setScore(0);
  };

  const handleCountdownEnd = () => {
    setScreen('game'); // Transition to Game screen after countdown
  };

  const handleGameOver = () => {

    let newLeaderboard = [];
    for (let i = 0; i < leaderboard.length; i++) {
      newLeaderboard.push(leaderboard[i]);
    }
  
    if (score > 0 && (newLeaderboard.length < 3 || score > newLeaderboard[newLeaderboard.length - 1].score)) {
      newLeaderboard.push({ name: username, score }); // add new score
      newLeaderboard.sort(function (a, b) {
        return b.score - a.score;
      });
  
      // Keep only the top 3
      newLeaderboard = newLeaderboard.slice(0, 3);
    }
  
    // Update state
    setLeaderboard(newLeaderboard);
    setScreen('menu');
  };

  const handleNextRound = () => {
    setRound((prevRound) => prevRound +1);
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="App">

      {screen === 'menu' && (
        <MainMenu 
        username={username}
        setUsername={setUsername}
        leaderboard={leaderboard}
        onStart={handleStart} 
        />
      )}
      {screen === 'countdown' && <Countdown onCountdownEnd={handleCountdownEnd} />}
      {screen === 'game' && (
        <div>
          <div className="score">Score: {score}</div> 
          <Board onGameOver={handleGameOver} round={round} onNextRound = {handleNextRound} />
        </div>
      )}
    </div>
  );
}

export default App;
