import React, { useState, useEffect } from "react";

const StoryGame = () => {
  const [currentStep, setCurrentStep] = useState("awal");
  const [story, setStory] = useState({});

  useEffect(() => {
    fetch("/story.json")
      .then((response) => response.json())
      .then((data) => setStory(data))
      .catch((error) => console.error("Error loading story:", error));
  }, []);

  const handleOptionClick = (nextStep) => {
    setCurrentStep(nextStep);
  };

  if (!story[currentStep]) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Pilih Petualanganmu</h1>
      <p>{story[currentStep].text}</p>
      <div>
        {story[currentStep].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.next)}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryGame;
