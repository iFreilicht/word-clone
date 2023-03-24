import React from "react";

function Input() {
  let [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        title="Exactly 5 letters"
        value={guess}
        onChange={(event) =>
          setGuess(event.target.value.toUpperCase().slice(0, 5))
        }
      />
    </form>
  );
}

export default Input;
