import './App.css';
import Chessboard from './components/Chessboard';
import { useState } from 'react';

function App() {
  const [boardState, setBoardState] = useState([]);
  const [cachedTurns, setCachedTurns] = useState([[{}]]);
  const [boardStatesBeforeCurrent, setBoardStatesBeforeCurrent] = useState(0);

  const handleBack = e => {
    e.preventDefault();
    const totalBoardStates = cachedTurns.length;
    if (boardStatesBeforeCurrent < totalBoardStates) {
      setBoardStatesBeforeCurrent(current => current + 1);

      setBoardState(
        cachedTurns[totalBoardStates - 1 - boardStatesBeforeCurrent]
      );
    }
  };

  const handleForward = e => {
    // e.preventDefault();
    // const totalBoardStates = cachedTurns.length;
    // if (boardStatesBeforeCurrent > 0) {
    //   setBoardStatesBeforeCurrent(current => current - 1);

    //   setBoardState(
    //     cachedTurns[totalBoardStates - 1 - boardStatesBeforeCurrent]
    //   );
    // }
  };
  console.log(cachedTurns[0]);
  console.log(boardStatesBeforeCurrent);
  return (
    <div className="App">
      <Chessboard
        boardState={boardState}
        setBoardState={setBoardState}
        setCachedTurns={setCachedTurns}
      />
      <button className="turn-button" onClick={handleBack}>
        Back
      </button>
      <button className="turn-button" onClick={handleForward}>
        Forward
      </button>
    </div>
  );
}

export default App;
