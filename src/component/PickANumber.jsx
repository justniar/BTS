import React, { useState } from "react";
import { OptionButton, RestartButton } from "../styled";

const PickANumber = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [range, setRange] = useState([1, 100]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setMessage("Please enter a number between 1 and 100.");
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess < targetNumber) {
      setMessage("Too low! Try again.");
      setRange([Math.max(range[0], userGuess + 1), range[1]]);
    } else if (userGuess > targetNumber) {
      setMessage("Too high! Try again.");
      setRange([range[0], Math.min(range[1], userGuess - 1)]);
    } else {
      setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts.`);
      setRange([1, 100]); 
    }
    setGuess("");
  };

  const restartGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
    setRange([1, 100]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>Guessing Game</h1>
      <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>
      {message && <p style={{ fontSize: "1.2em", color: message.includes("Congratulations") ? "green" : "red" }}>{message}</p>}
      {range[0] !== range[1] && (
        <p>The number is between <strong>{range[0]}</strong> and <strong>{range[1]}</strong>.</p>
      )}
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <br />
      <OptionButton
        onClick={handleGuess}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Guess
      </OptionButton>
      <RestartButton
        onClick={restartGame}
      >
        Restart Game
      </RestartButton>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default PickANumber;
