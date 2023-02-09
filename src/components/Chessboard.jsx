import Square from './squares/Square';
import { useState, useEffect } from 'react';
import generateInitialBoardState from '../utils/generateInitialBoardState';

const Chessboard = () => {
  const [boardState, setBoardState] = useState([]);
  const [isPieceSelected, setIsPieceSelected] = useState(false);
  const [isWhitesTurn, setIsWhitesTurn] = useState(true);

  useEffect(() => {
    const initialBoardState = generateInitialBoardState();
    setBoardState(initialBoardState);
  }, []);

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
          />
        );
      })}
    </div>
  );
};

export default Chessboard;
