import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p key={guess.index} className="guess">
            {guess.name}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
