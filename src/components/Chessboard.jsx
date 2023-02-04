import Square from './squares/Square';
import { useState, UseEffect } from 'react';

const Chessboard = () => {
  const [selectedSquare, setSelectedSquare] = useState({});

  const squareCoordinates = [];
  let squareIsLight = true;
  let count = 0;
  for (let y = 8; y >= 1; y--) {
    for (let x = 1; x <= 8; x++) {
      squareCoordinates.push([x, y, squareIsLight, count]);
      squareIsLight = !squareIsLight;
      count++;
      if (count % 8 === 0) {
        squareIsLight = !squareIsLight;
      }
    }
  }

  return (
    <div className="chessboard">
      {squareCoordinates.map(coord => {
        return (
          <Square
            squareIsLight={coord[2]}
            xCoord={coord[0]}
            yCoord={coord[1]}
            key={coord[3]}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
          />
        );
      })}
    </div>
  );
};

export default Chessboard;
