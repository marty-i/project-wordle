import React from 'react';
import Guess from '../Guess';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  console.log({ guesses });
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess key={index} word={guesses[index]} />;
      })}
    </div>
  );
}

export default GuessResults;
