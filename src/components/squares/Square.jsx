import Piece from './Piece';

const Square = ({
  square,
  boardState,
  setBoardState,
  isPieceSelected,
  setIsPieceSelected,
  isWhitesTurn,
  setIsWhitesTurn,
  selectedSquare,
  setSelectedSquare,
}) => {
  const { x, y, pieceName, isWhitePiece, squareIsLight, isSelected } = square;

  let squareColour = squareIsLight ? 'light-square' : 'dark-square';

  if (isSelected === true) {
    squareColour = 'selected';
  }

  const handleClick = e => {
    e.preventDefault();

    // sets selected square depending on whose turn it is, and only allows selecting of a square with a piece on it
    if ((isWhitesTurn && isWhitePiece) || (!isWhitesTurn && !isWhitePiece)) {
      setBoardState(currBoardState => {
        const newBoardState = currBoardState.map(square => {
          if (x === square.x && y === square.y) {
            setSelectedSquare({ ...square });
            return { ...square, isSelected: true };
          } else {
            return { ...square, isSelected: false };
          }
        });
        return newBoardState;
      });
      setIsPieceSelected(true);
    }
    // allows piece movement
    else if (
      (isWhitesTurn &&
        (!isWhitePiece || pieceName === 'empty') &&
        isPieceSelected) ||
      (!isWhitesTurn &&
        (isWhitePiece || pieceName === 'empty') &&
        isPieceSelected)
    ) {
      setBoardState(currBoardState => {
        const selectedX = selectedSquare.x;
        const selectedY = selectedSquare.y;
        const selectedPieceName = selectedSquare.pieceName;
        const selectedPieceIsWhite = selectedSquare.isWhitePiece;
        const newBoardState = currBoardState.map(square => {
          if (x === square.x && y === square.y) {
            return {
              ...square,
              isWhitePiece: selectedPieceIsWhite,
              pieceName: selectedPieceName,
            };
          } else if (selectedX === square.x && selectedY === square.y) {
            return {
              ...square,
              isSelected: false,
              isWhitePiece: null,
              pieceName: 'empty',
            };
          } else {
            return { ...square };
          }
        });
        return newBoardState;
      });
      setIsPieceSelected(false);
      setIsWhitesTurn(value => !value);
      setSelectedSquare({});
    }
  };

  return (
    <button className={squareColour} onClick={handleClick}>
      <Piece pieceName={pieceName} isWhitePiece={isWhitePiece} />
    </button>
  );
};

export default Square;
