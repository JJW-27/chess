import { useState, useEffect } from 'react';

const Square = ({ xCoord, yCoord, squareIsLight }) => {
  const squareColour = squareIsLight ? 'light-square' : 'dark-square';

  const [squareData, setSquareData] = useState({});

  return <button className={squareColour}></button>;
};

export default Square;
