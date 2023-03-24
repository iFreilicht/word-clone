import React from "react";

function GuessResults({ guesses = ["DEFAU", "GUESS"] }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
