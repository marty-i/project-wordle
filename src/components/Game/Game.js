import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function addGuessResult(guess) {
    console.info({ guess });
    const indexedGuess = { name: guess, index: crypto.randomUUID() };
    setGuessResults([...guessResults, indexedGuess]);
  }

  return (
    <>
      <GuessResults guesses={guessResults} />
      <GuessInput addGuessResult={addGuessResult} />
    </>
  );
}

export default Game;
