import React from "react";

function FinishBanner({ gameStatus = "running", numGuesses, answer }) {
  if (gameStatus === "running") {
    return;
  }
  return gameStatus === "won" ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default FinishBanner;
