import Piece from './Piece';
import { useState, useEffect } from 'react';

const Square = ({
  xCoord,
  yCoord,
  squareIsLight,
  selectedSquare,
  setSelectedSquare,
  isPieceSelected,
  setIsPieceSelected,
  movePlayed,
  setMovePlayed,
}) => {
  const [squareData, setSquareData] = useState({
    xCoord,
    yCoord,
  });

  useEffect(() => {
    let initialPieceColour;
    if (squareData.yCoord >= 7) {
      initialPieceColour = 'black';
    } else if (squareData.yCoord <= 2) {
      initialPieceColour = 'white';
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
      initialPieceName = 'queen';
    } else if (
      (squareData.yCoord === 1 || squareData.yCoord === 8) &&
      squareData.xCoord === 5
    ) {
      initialPieceName = 'king';
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

  useEffect(() => {
    if (
      selectedSquare.xCoord === squareData.xCoord &&
      selectedSquare.yCoord === squareData.yCoord
    ) {
      setSquareData(currData => {
        const newData = { ...currData };
        delete newData.pieceName;
        delete newData.pieceColour;
        return newData;
      });
      setSelectedSquare({});
      setIsPieceSelected(false);
    }
  }, [movePlayed]);

  const squareColour = squareIsLight ? 'light-square' : 'dark-square';

  const isSelected =
    selectedSquare.xCoord === squareData.xCoord &&
    selectedSquare.yCoord === squareData.yCoord
      ? 'selected'
      : null;

  const handleClick = e => {
    e.preventDefault();
    if (squareData.pieceName && !isPieceSelected) {
      setSelectedSquare({
        xCoord: squareData.xCoord,
        yCoord: squareData.yCoord,
        pieceName: squareData.pieceName,
        pieceColour: squareData.pieceColour,
      });
      setIsPieceSelected(true);
    } else if (squareData.pieceColour === selectedSquare.pieceColour) {
      setSelectedSquare({
        xCoord: squareData.xCoord,
        yCoord: squareData.yCoord,
        pieceName: squareData.pieceName,
        pieceColour: squareData.pieceColour,
      });
    } else if (isPieceSelected && !squareData.pieceName) {
      console.log('move played');
      setSquareData(currData => {
        return {
          ...currData,
          pieceName: selectedSquare.pieceName,
          pieceColour: selectedSquare.pieceColour,
        };
      });
      setMovePlayed(played => {
        return !played;
      });
    }
  };

  return (
    <button className={squareColour} id={isSelected} onClick={handleClick}>
      <Piece
        pieceName={squareData.pieceName}
        pieceColour={squareData.pieceColour}
      />
    </button>
  );
};

export default Square;
