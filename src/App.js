import React, { useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Countdown from './components/Countdown';


function App() {

  // track which screen to show: main menu, or countdown, or game
  const [screen, setScreen] = useState('menu');

  const handleStart = () => {
    setScreen('countdown'); // Transition to the Countdown screen
  };

  const handleCountdownEnd = () => {
    setScreen('game'); // Transition to Game screen after countdown
  };

  return (
    <div className="App">

      {/* if screen state menu, load main menu */}
      {screen === 'menu' && <MainMenu onStart={handleStart} />}
      {screen === 'countdown' && <Countdown onCountdownEnd={handleCountdownEnd} />}
      {screen === 'game' && <h2>Game Screen Placeholder</h2>}
    </div>
  );
}

export default App;
