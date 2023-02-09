import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessPawn,
  FaChessQueen,
  FaChessRook,
} from 'react-icons/fa';

const Piece = ({ pieceName, isWhitePiece }) => {
  let piece;

  if (!isWhitePiece) {
    switch (pieceName) {
      case 'bishop':
        piece = <FaChessBishop size={40} />;
        break;

      case 'king':
        piece = <FaChessKing size={40} />;
        break;

      case 'knight':
        piece = <FaChessKnight size={40} />;
        break;

      case 'pawn':
        piece = <FaChessPawn size={40} />;
        break;

      case 'queen':
        piece = <FaChessQueen size={40} />;
        break;

      case 'rook':
        piece = <FaChessRook size={40} />;
        break;

      default:
        break;
    }
  } else {
    switch (pieceName) {
      case 'bishop':
        piece = <FaChessBishop size={40} color="white" />;
        break;

      case 'king':
        piece = <FaChessKing size={40} color="white" />;
        break;

      case 'knight':
        piece = <FaChessKnight size={40} color="white" />;
        break;

      case 'pawn':
        piece = <FaChessPawn size={40} color="white" />;
        break;

      case 'queen':
        piece = <FaChessQueen size={40} color="white" />;
        break;

      case 'rook':
        piece = <FaChessRook size={40} color="white" />;
        break;

      default:
        break;
    }
  }

  return piece;
};

export default Piece;
