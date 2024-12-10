import React, { useState, useEffect } from 'react';

/**
 * Countdown component that displays a countdown timer before the game starts.
 *
 * @param {Object} props - The component props.
 * @param {function} props.onCountdownEnd - Callback triggered when the countdown finishes.
 * @returns {JSX.Element} The rendered Countdown component.
 */

const Countdown = ({ onCountdownEnd }) => {
    /**
   * The current countdown number.
   * @type {number}
   */
  const [count, setCount] = useState(5); // Start countdown at 5 seconds

  //countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
    // pass previous count value to setcount 
      setCount((prev) => {
        // stop timer at 0
        if (prev <= 1) {
          clearInterval(timer);
          onCountdownEnd();
          return 0;
        }
        return prev -1; //decrement counter
    });
}, 1000);

return () => clearInterval(timer);
}, [onCountdownEnd]);

return (
    <div>
        <h2>Get Ready...</h2>
        <h1>{count}</h1>
    </div>
    );
};

export default Countdown;