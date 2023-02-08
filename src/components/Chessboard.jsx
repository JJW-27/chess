import Square from './squares/Square';
import { useState, useEffect } from 'react';

const Chessboard = () => {
  const [boardState, setBoardState] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState({});
  const [isPieceSelected, setIsPieceSelected] = useState(false);
  const [movePlayed, setMovePlayed] = useState(false);
  const [validSquares, setValidSquares] = useState([[]]);

    useEffect(() => {
    const initialBoardState = [];

    let squareIsLight = true;
    let count = 0;

    for (let y = 8; y >= 1; y--) {
      for (let x = 1; x <= 8; x++) {
        initialBoardState.push({
          x,
          y,
          pieceName: 'none',
          pieceColour: 'none',
          isSelected: 'false',
          isValidSquare: 'false',
          squareIsLight,
        });
        squareIsLight = !squareIsLight;
        count++;
        if (count % 8 === 0) {
          squareIsLight = !squareIsLight;
        }
      }
    }
    initialBoardState.forEach(square => {
      if (square.y >= 7) {
        square.pieceColour = 'black';
      } else if (square.y <= 2) {
        square.pieceColour = 'white';
      }

      if (
        (square.y === 1 || square.y === 8) &&
        (square.x === 1 || square.x === 8)
      ) {
        square.pieceName = 'rook';
      } else if (
        (square.y === 1 || square.y === 8) &&
        (square.x === 2 || square.x === 7)
      ) {
        square.pieceName = 'knight';
      } else if (
        (square.y === 1 || square.y === 8) &&
        (square.x === 3 || square.x === 6)
      ) {
        square.pieceName = 'bishop';
      } else if ((square.y === 1 || square.y === 8) && square.x === 4) {
        square.pieceName = 'queen';
      } else if ((square.y === 1 || square.y === 8) && square.x === 5) {
        square.pieceName = 'king';
      } else if (square.y === 2 || square.y === 7) {
        square.pieceName = 'pawn';
      }
    });
    setBoardState(initialBoardState);
  }, []);

  return (
    <div className="chessboard">
      {boardState.map(square => {
        return <Square square={square} />;
      })}
    </div>
  );
};

export default Chessboard;
