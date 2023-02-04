import Piece from './Piece';
import { useState, useEffect } from 'react';

const Square = ({
  xCoord,
  yCoord,
  squareIsLight,
  selectedSquare,
  setSelectedSquare,
}) => {
  const [squareData, setSquareData] = useState({
    xCoord,
    yCoord,
  });

  useEffect(() => {
    let initialPieceColour;
    if (squareData.yCoord >= 7) {
      initialPieceColour = 'white';
    } else if (squareData.yCoord <= 2) {
      initialPieceColour = 'black';
    }
    let initialPieceName;
    if (
      (squareData.yCoord === 1 || squareData.yCoord === 8) &&
      (squareData.xCoord === 1 || squareData.xCoord === 8)
    ) {
      initialPieceName = 'rook';
    } else if (
      (squareData.yCoord === 1 || squareData.yCoord === 8) &&
      (squareData.xCoord === 2 || squareData.xCoord === 7)
    ) {
      initialPieceName = 'knight';
    } else if (
      (squareData.yCoord === 1 || squareData.yCoord === 8) &&
      (squareData.xCoord === 3 || squareData.xCoord === 6)
    ) {
      initialPieceName = 'bishop';
    } else if (
      (squareData.yCoord === 1 || squareData.yCoord === 8) &&
      squareData.xCoord === 4
    ) {
      initialPieceName = 'king';
    } else if (
      (squareData.yCoord === 1 || squareData.yCoord === 8) &&
      squareData.xCoord === 5
    ) {
      initialPieceName = 'queen';
    } else if (squareData.yCoord === 2 || squareData.yCoord === 7) {
      initialPieceName = 'pawn';
    }

    setSquareData(currData => {
      return {
        pieceName: initialPieceName,
        pieceColour: initialPieceColour,
        ...currData,
      };
    });
  }, []);

  const squareColour = squareIsLight ? 'light-square' : 'dark-square';

  const isSelected =
    selectedSquare.xCoord === squareData.xCoord &&
    selectedSquare.yCoord === squareData.yCoord
      ? 'selected'
      : null;

  const handleClick = e => {
    e.preventDefault();
    setSelectedSquare({ xCoord: squareData.xCoord, yCoord: squareData.yCoord });
    console.log(squareData);
  };

  const handleClickOff = e => {
    setSelectedSquare({});
  };

  return (
    <button
      className={squareColour}
      id={isSelected}
      onClick={handleClick}
      onBlur={handleClickOff}
    >
      <Piece
        pieceName={squareData.pieceName}
        pieceColour={squareData.pieceColour}
      />
    </button>
  );
};

export default Square;
