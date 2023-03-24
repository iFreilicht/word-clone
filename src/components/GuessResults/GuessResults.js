import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses = ["DEFAU", "GUESS"] }) {
  const displayedGuesses = [
    ...guesses,
    ...range(guesses.length, NUM_OF_GUESSES_ALLOWED).map(() => ""),
  ];

  return (
    <div className="guess-results">
      {displayedGuesses.map((guess, index) => (
        <Guess guess={guess} key={index}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
