import React from 'react';
import './App.css';
import Field from '../field/field';
import Fight from '../../oop/fight/fight';

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