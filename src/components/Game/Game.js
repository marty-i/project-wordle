import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

const answer = sample(WORDS);
console.log({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuessResult(guess) {
    console.log({ guess });
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput addGuessResult={addGuessResult} />
    </>
  );
}

export default Game;
