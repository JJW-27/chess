import Square from './squares/Square';
import { useState, useEffect } from 'react';

const Chessboard = () => {
  const [boardState, setBoardState] = useState({});
  const [selectedSquare, setSelectedSquare] = useState({});
  const [isPieceSelected, setIsPieceSelected] = useState(false);
  const [movePlayed, setMovePlayed] = useState(false);
  const [validSquares, setValidSquares] = useState([[]]);

  // generates 64 squares with unique x and y coordinates, from top left to bottom right
  useEffect(() => {
    const initialBoardState = {}
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
  }, []);
  

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
            isPieceSelected={isPieceSelected}
            setIsPieceSelected={setIsPieceSelected}
            movePlayed={movePlayed}
            setMovePlayed={setMovePlayed}
            validSquares={validSquares}
            setValidSquares={setValidSquares}
          />
        );
      })}
    </div>
  );
};

export default Chessboard;
