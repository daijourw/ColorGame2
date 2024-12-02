import React, { useState, useEffect } from 'react';

const Board = ({ onGameOver, round, onNextRound}) => {
    const [colors, setColors] = useState([]);
    const [oddIndex, setOddIndex] = useState(0);
  
    useEffect(() => {generateColors();}, [round]);

    // above will generate colors when the component mounts or round changes
    // below helper functions to generate colors

    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };
    
      const slightlyDifferentColor = (baseColor) => {
        const rgb = baseColor.match(/\d+/g).map(Number); // regex to match, convert to number with map
        const diff = Math.max(5, 30 - round * 2); // decrease color difference as round increase
        const newRgb = rgb.map((value) => Math.min(255, Math.max(0, value + diff))); //add difference but stay within limit
        return `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`;
    };

    const generateColors = () => {
        const baseColor = getRandomColor();
        const oddColor = slightlyDifferentColor(baseColor);
        
        const newColors = Array(round + 2).fill(baseColor); // get array of squares and put base color in index, using round to increment number of squares

        setColors(newColors);

        const randomIndex = Math.floor(Math.random() * newColors.length);
        newColors[randomIndex] = oddColor; //insert odd color

        setOddIndex(randomIndex);
    };

    const handleSquareClick = (index) => {
        if (index === oddIndex) {
          onNextRound();

        } else {
          alert('Game Over');
          onGameOver();
        }
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '50px' }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    onClick={() => handleSquareClick(index)}
                    style={{
                    backgroundColor: color,
                    width: '100px',
                    height: '100px',
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Board;