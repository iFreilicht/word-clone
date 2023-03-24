import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letters = guess
    ? checkGuess(guess, answer)
    : range(5).map(() => ({ letter: "", status: "" }));

  return (
    <p className="guess">
      {letters.map(({ letter, status }, index) => (
        <span className={`cell ${status}`} key={index}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
