import { useState, useEffect } from 'react';

const Square = ({
  xCoord,
  yCoord,
  squareIsLight,
  selectedSquare,
  setSelectedSquare,
}) => {
  const [squareData, setSquareData] = useState({ xCoord, yCoord });

  const squareColour = squareIsLight ? 'light-square' : 'dark-square';

  const isSelected =
    selectedSquare.xCoord === squareData.xCoord &&
    selectedSquare.yCoord === squareData.yCoord
      ? 'selected'
      : null;

  const handleClick = e => {
    e.preventDefault();
    setSelectedSquare({ xCoord: squareData.xCoord, yCoord: squareData.yCoord });
  };

  return <button className={squareColour} id={isSelected} onClick={handleClick}></button>;
};

export default Square;
