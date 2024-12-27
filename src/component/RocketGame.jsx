import React, { useState, useEffect } from "react";

const RocketGame = () => {
  const [countdown, setCountdown] = useState(10);
  const [launched, setLaunched] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (countdown > 0 && started && !launched) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); 
    } else if (countdown === 0) {
      setLaunched(true);
    }
  }, [countdown, launched, started]);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>🚀 Rocket Launch Countdown</h1>
      {!launched ? (
        <>
          <h2 style={{ fontSize: "5em" }}>{countdown}</h2>
          {!started && (
            <button
              onClick={handleStart}
              style={{
                padding: "10px 20px",
                fontSize: "1.2em",
                marginTop: "20px",
                cursor: "pointer",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Start Countdown
            </button>
          )}
        </>
      ) : (
        <h2 style={{ fontSize: "5em", color: "red" }}>Blast Off! 🚀</h2>
      )}
    </div>
  );
};

export default RocketGame;
