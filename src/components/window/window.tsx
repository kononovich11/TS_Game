import React from 'react';

const Window = () => {
  const demageHandler = () => {
    console.log('demage');
  }

  return (
    <div className="window">
      <h2> What is the action will you do? </h2>
      <button onClick={demageHandler}>Demage</button>
      <button>Heal</button>
    </div>
  );
}

export default Window;