import React, { useState } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';


function App() {

  // track which screen to show: main menu, or countdown, or game
  const [screen, setScreen] = useState('menu');

  const handleStart = () => {
    setScreen('countdown'); // Transition to the Countdown screen
  };

  return (
    <div className="App">

      {/* if screen state menu, load main menu */}
      {screen === 'menu' && <MainMenu onStart={handleStart} />}
      {screen === 'countdown' && <h2>Countdown Placeholder</h2>}
      {/* Placeholder for future screens*/}
    </div>
  );
}

export default App;
