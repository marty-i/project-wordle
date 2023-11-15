import React from 'react';

function GuessInput({ addGuessResult }) {
  const [guess, setGuess] = React.useState('');

  function submitGuess(event) {
    event.preventDefault();
    addGuessResult(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="The word must be 5 letters long."
        value={guess}
        onChange={(e) =>
          setGuess(e.target.value.trim().toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
