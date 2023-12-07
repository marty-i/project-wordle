import React from 'react';

function Guess({ word }) {
  console.log({ word });

  return (
    <p className="guess">
      {word.split('').map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
