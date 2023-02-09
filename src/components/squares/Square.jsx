import Piece from './Piece';

const Square = ({
  square,
  boardState,
  setBoardState,
  isPieceSelected,
  setIsPieceSelected,
  isWhitesTurn,
  setIsWhitesTurn,
}) => {
  const { x, y, pieceName, isWhitePiece, squareIsLight, isSelected } = square;

  let squareColour = squareIsLight ? 'light-square' : 'dark-square';

  if (isSelected === true) {
    squareColour = 'selected';
  }

  const handleClick = e => {
    e.preventDefault();

    // sets selected square depending on whose turn it is
    if (
      (isWhitesTurn && isWhitePiece) ||
      (!isWhitesTurn && !isWhitePiece === 'black')
    ) {
      setBoardState(currBoardState => {
        const newBoardState = currBoardState.map(square => {
          if (x === square.x && y === square.y) {
            return { ...square, isSelected: true };
          } else {
            return { ...square, isSelected: false };
          }
        });
        return newBoardState;
      });
      setIsPieceSelected(true);
    }
  };

  return (
    <button className={squareColour} onClick={handleClick}>
      <Piece pieceName={pieceName} isWhitePiece={isWhitePiece} />
    </button>
  );
};

export default Square;
