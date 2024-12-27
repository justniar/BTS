import React, { useState } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
  ];

  const handleAnswer = (option) => {
    setUserAnswers([...userAnswers, option]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Quiz App</h1>
      {!showResults ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
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
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Results</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} -{" "}
                {userAnswers[index] === question.answer ? (
                  <span style={{ color: "green" }}>Correct</span>
                ) : (
                  <span style={{ color: "red" }}>
                    Wrong (Correct answer: {question.answer})
                  </span>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={restartQuiz}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
