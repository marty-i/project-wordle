import React from 'react';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  console.log({ guesses });
  return (
    <div className="guess-results">
      <Guess word={guesses[0]} />
      <Guess word={guesses[1]} />
      <Guess word={guesses[2]} />
      <Guess word={guesses[3]} />
      <Guess word={guesses[4]} />
      <Guess word={guesses[5]} />
    </div>
  );
}

export default GuessResults;
