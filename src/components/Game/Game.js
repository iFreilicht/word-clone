import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const submitGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
      <Input submitGuess={submitGuess} />
    </>
  );
}

export default Game;
