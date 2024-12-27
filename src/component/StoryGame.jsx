import React, { useState } from "react";
import { AppContainer, OptionButton, OptionList } from "../styled";

const StoryGame = () => {
  const [currentStep, setCurrentStep] = useState("awal");
  const [story, setStory] = useState({});

  fetch("/story.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => setStory(data))
  .catch((error) => console.error("Error loading story:", error));

  const handleOptionClick = (nextStep) => {
    setCurrentStep(nextStep);
  };

  if (!story[currentStep]) {
    return <div>Loading...</div>;
  }

  return (
    <AppContainer style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Pilih Petualanganmu</h1>
      <p>{story[currentStep].text}</p>
      <OptionList>
        {story[currentStep].options.map((option, index) => (
          <OptionButton
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
          </OptionButton>
        ))}
      </OptionList>
    </AppContainer>
  );
};

export default StoryGame;
