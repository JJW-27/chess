import Square from './squares/Square';
import { useState, useEffect } from 'react';
import generateInitialBoardState from '../utils/generateInitialBoardState';

const Chessboard = ({ boardState, setBoardState, setCachedTurns }) => {
  const [isPieceSelected, setIsPieceSelected] = useState(false);
  const [isWhitesTurn, setIsWhitesTurn] = useState(true);
  const [selectedSquare, setSelectedSquare] = useState({});

  useEffect(() => {
    const initialBoardState = generateInitialBoardState();
    setBoardState(initialBoardState);
    setCachedTurns([initialBoardState]);
  }, []);
  // console.log(
  //   `white's turn? ${isWhitesTurn}, 'Is piece selected? ${isPieceSelected}`
  // );
  // console.log(selectedSquare);
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
            setCachedTurns={setCachedTurns}
          />
        );
      })}
    </div>
  );
};

export default Chessboard;
