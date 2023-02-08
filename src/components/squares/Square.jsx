import Piece from './Piece';
import { useState, useEffect } from 'react';
import checkValidSquares from '../../utils/checkValidSquares';

const Square = ({ square }) => {
  const {
    x,
    y,
    pieceName,
    pieceColour,
    isSelected,
    isValidSquare,
    squareIsLight,
  } = square;

  const squareColour = squareIsLight ? 'light-square' : 'dark-square';

  // useEffect(() => {
  //   if (
  //     selectedSquare.xCoord === squareData.xCoord &&
  //     selectedSquare.yCoord === squareData.yCoord
  //   ) {
  //     setSquareData(currData => {
  //       const newData = { ...currData };
  //       delete newData.pieceName;
  //       delete newData.pieceColour;
  //       return newData;
  //     });
  //     setSelectedSquare({});
  //     setIsPieceSelected(false);
  //   }
  // }, [movePlayed]);

  // // sets CSS class dynamically
  // const squareColour = squareIsLight ? 'light-square' : 'dark-square';

  // // sets CSS id dynamically
  // let selectedOrValid;

  // if (
  //   selectedSquare.xCoord === squareData.xCoord &&
  //   selectedSquare.yCoord === squareData.yCoord
  // ) {
  //   selectedOrValid = 'selected';

  // }

  // const handleClick = e => {
  //   e.preventDefault();
  //   // if the clicked square has a piece and a piece isn't already selected
  //   if (squareData.pieceName && !isPieceSelected) {
  //     setSelectedSquare({
  //       xCoord: squareData.xCoord,
  //       yCoord: squareData.yCoord,
  //       pieceName: squareData.pieceName,
  //       pieceColour: squareData.pieceColour,
  //     });
  //     setIsPieceSelected(true);
  //   }
  //   // if a piece is selected, only allow selecting of same colour piece
  //   else if (squareData.pieceColour === selectedSquare.pieceColour) {
  //     setSelectedSquare({
  //       xCoord: squareData.xCoord,
  //       yCoord: squareData.yCoord,
  //       pieceName: squareData.pieceName,
  //       pieceColour: squareData.pieceColour,
  //     });
  //   }
  //   // if a piece is selected and the target square has no piece, or a piece of the opposite colour, add that piece to the target square and clear the selected square
  //   else if (
  //     isPieceSelected &&
  //     squareData.pieceColour !== selectedSquare.pieceColour
  //   ) {
  //     setSquareData(currData => {
  //       return {
  //         ...currData,
  //         pieceName: selectedSquare.pieceName,
  //         pieceColour: selectedSquare.pieceColour,
  //       };
  //     });
  //     setMovePlayed(played => {
  //       return !played;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (isPieceSelected) {
  //     const returnedValidSquares = checkValidSquares(squareData);
  //     setValidSquares(returnedValidSquares);
  //     if (validSquares.includes([squareData.xCoord, squareData.yCoord])) {
  //       selectedOrValid = 'valid';
  //       console.log('true');
  //     }
  //   }
  // }, [isPieceSelected]);

  return (
    <button className={squareColour}>
      <Piece pieceName={pieceName} pieceColour={pieceColour} />
    </button>
  );
};

export default Square;
