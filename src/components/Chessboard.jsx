import Square from './squares/Square';
import { useState, useEffect } from 'react';
import generateInitialBoardState from '../utils/generateInitialBoardState';

const Chessboard = () => {
  const [boardState, setBoardState] = useState([]);
  const [isPieceSelected, setIsPieceSelected] = useState(false);
  const [isWhitesTurn, setIsWhitesTurn] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState({});

  useEffect(() => {
    const initialBoardState = generateInitialBoardState();
    setBoardState(initialBoardState);
  }, []);
  console.log(selectedSquare);
  console.log(
    `isWhitesTurn - ${isWhitesTurn}, isPieceSelected - ${isPieceSelected}`
  );
  return (
    <div className="chessboard">
      {boardState.map(square => {
        return (
          <Square
            square={square}
            boardState={boardState}
            setBoardState={setBoardState}
            isPieceSelected={isPieceSelected}
            setIsPieceSelected={setIsPieceSelected}
            isWhitesTurn={isWhitesTurn}
            setIsWhitesTurn={setIsWhitesTurn}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
          />
        );
      })}
    </div>
  );
};

export default Chessboard;
