import React from 'react';

function Guess({ word }) {
  console.log({ word });

  function generateCellRow() {
    let row = [];

    if (word === undefined) {
      return [
        <span className="cell"></span>,
        <span className="cell"></span>,
        <span className="cell"></span>,
        <span className="cell"></span>,
        <span className="cell"></span>,
      ];
    }

    for (let i = 0; i < word.name.length; i++) {
      row.push(<span className="cell">{word.name[i]}</span>);
    }

    return row;
  }

  return <p className="guess">{generateCellRow()}</p>;
}

export default Guess;
