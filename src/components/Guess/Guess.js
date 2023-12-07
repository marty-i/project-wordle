import React from 'react';
import { range } from '../../utils';

function Guess({ word }) {
  console.log({ word });

  function createRow() {
    if (word === undefined) {
      return range(5).map((_, index) => (
        <span key={index} className="cell"></span>
      ));
    }

    return word.split('').map((letter, index) => (
      <span key={index} className="cell">
        {letter}
      </span>
    ));
  }

  return <p className="guess">{createRow()}</p>;
}

export default Guess;
