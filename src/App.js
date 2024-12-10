import React, { useState, useEffect } from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import Countdown from './components/Countdown';
import Board from './components/Board';
import GameOver from './components/GameOver';


/**
* Main application component.
* Manages the different screens (menu, countdown, game, game over) and overall state of the game.
*/


function App() {


 /**
  * Tracks the current screen: 'menu', 'countdown', 'game', 'gameOver'.
  * @type {string}
  */
 const [screen, setScreen] = useState('menu');


 /**
  * Tracks the current game round.
  * @type {number}
  */
 const [round, setRound] = useState(1);


 /**
  * Tracks the player's current score.
  * @type {number}
  */
 const [score, setScore] = useState(0);


 /**
  * Stores the player's username.
  * @type {string}
  */
 const [username, setUsername] = useState('');


 /**
  * Leaderboard data containing player names and scores.
  * @type {Array<{name: string, score: number}>}
  */
 const [leaderboard, setLeaderboard] = useState([]);


 useEffect(() => {
   const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
   setLeaderboard(storedLeaderboard);
 }, []);


 useEffect(() => {
   localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
 }, [leaderboard]);


 //start game from main menu, and check that username has been entered
 const handleStart = () => {
   if (!username.trim()) {
     alert('Enter a username to play!');
     return;
   }
   setScreen('countdown');
   setRound(1);
   setScore(0);
 };


 // Transition to Game screen after countdown
 const handleCountdownEnd = () => {
   setScreen('game');
 };


 //Transitition to Game over screen
 const handleGameOver = () => {
   setScreen('gameOver');
 };


 //increment round and score
 const handleNextRound = () => {
   setRound((prevRound) => prevRound +1);
   setScore((prevScore) => prevScore + 1);
 };


   // Return to main menu and add player to leaderboard if score is in the top 3
   const handleReturnToMenu = () => {


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
    // Play again, restart the game
   const handlePlayAgain = () => {
     setScreen('countdown');
     setRound(1);
     setScore(0);
   };


 return (
   <div className="App">
     {/* Main Menu Screen */}
     {screen === 'menu' && (
       <MainMenu
       username={username}
       setUsername={setUsername}
       leaderboard={leaderboard}
       onStart={handleStart}
       />
     )}
     {/* Countdown Screen */}
     {screen === 'countdown' && <Countdown onCountdownEnd={handleCountdownEnd} />}
     {/* Game Screen */}
     {screen === 'game' && (
       <Board
         round={round}
         score={score}
         onGameOver={handleGameOver}
         onNextRound={handleNextRound}
       />
     )}


     {/* Game Over Screen */}
     {screen === 'gameOver' && (
       <GameOver
         score={score}
         onPlayAgain={handlePlayAgain}
         onReturnToMenu={handleReturnToMenu}
       />
     )}
   </div>
 );
}


export default App;