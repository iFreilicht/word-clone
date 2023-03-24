import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input/Input";
import GuessResults from "../GuessResults/GuessResults";
import FinishBanner from "../FinishBanner/FinishBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  const submitGuess = (guess) => {
    if (gameStatus !== "running") {
      return;
    }

    let nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus("won");
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <Input disabled={gameStatus !== "running"} submitGuess={submitGuess} />
      <FinishBanner
        gameStatus={gameStatus}
        numGuesses={guesses.length}
        answer={answer}
      ></FinishBanner>
    </>
  );
}

export default Game;
