import React, { useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Countdown from './components/Countdown';
import Board from './components/Board';


function App() {

  // track which screen to show: main menu, or countdown, or game
  const [screen, setScreen] = useState('menu');
  const [round, setRound] = useState(1);

  const handleStart = () => {
    setScreen('countdown'); // Transition to the Countdown screen
  };

  const handleCountdownEnd = () => {
    setScreen('game'); // Transition to Game screen after countdown
  };

  const handleGameOver = () => {
    setScreen('menu'); // Transition back to Main menu when game over
    setRound(1);
  };

  const handleNextRound = () => {
    setRound((prevRound) => prevRound +1); //increment round
  };

  return (
    <div className="App">

      {/* if screen state menu, load main menu */}
      {screen === 'menu' && <MainMenu onStart={handleStart} />}
      {screen === 'countdown' && <Countdown onCountdownEnd={handleCountdownEnd} />}
      {screen === 'game' && <Board onGameOver={handleGameOver} round={round} onNextRound = {handleNextRound} />}
    </div>
  );
}

export default App;
