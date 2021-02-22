import React from 'react';
import './App.css';
import Field from '../field/field';

function App() {
  const startGame = () => {
    // Fight();
  }

  return (
    <div className="App">
      <div className="windowStart">
        Click on the button for start game!
        <button onClick={startGame}>Start</button>
      </div>
      <Field/>
    </div>
  );
}

export default App;