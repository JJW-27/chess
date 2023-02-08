const checkValidSquares = ({ pieceName, pieceColour, xCoord, yCoord }) => {
  const validSquares = [];

  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      if (pieceName === 'rook') {
        if (x === xCoord || y === yCoord) {
          validSquares.push([x, y]);
          
        }
      }
    }
  }

  return validSquares;
};

export default checkValidSquares;
