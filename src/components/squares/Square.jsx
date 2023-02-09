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
  const { x, y, pieceName, pieceColour, squareIsLight, isSelected } = square;

  let squareColour = squareIsLight ? 'light-square' : 'dark-square';

  if (isSelected === true) {
    squareColour = 'selected';
  }

  const handleClick = e => {
    e.preventDefault();

    // sets selected square depending on whose turn it is
    if (
      (isWhitesTurn && pieceColour === 'white') ||
      (!isWhitesTurn && pieceColour === 'black')
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
      <Piece pieceName={pieceName} pieceColour={pieceColour} />
    </button>
  );
};

export default Square;
