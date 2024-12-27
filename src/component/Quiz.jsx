import React, { useState } from "react";
import { OptionButton, OptionList, QuestionText, QuizContainer, RestartButton, Results, ResultsContainer, ResultText } from "../styled";

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
    <QuizContainer>
      <h1>Quiz App</h1>
      {!showResults ? (
        <div>
          <QuestionText>{questions[currentQuestion].question}</QuestionText>
          <OptionList>
            {questions[currentQuestion].options.map((option, index) => (
              <OptionButton key={index} onClick={() => handleAnswer(option)}>
                {option}
              </OptionButton>
            ))}
          </OptionList>
        </div>
      ) : (
        <ResultsContainer>
          <h2>Results</h2>
          <ul>
            {questions.map((question, index) => (
              <Results
                key={index}
                correct={userAnswers[index] === question.answer}
              >
                {question.question} -{" "}
                {userAnswers[index] === question.answer ? (
                  <ResultText correct>
                    Correct ✔️
                  </ResultText>
                ) : (
                  <ResultText>
                    Wrong ❌ (Correct answer: {question.answer})
                  </ResultText>
                )}
              </Results>
            ))}
          </ul>
          <RestartButton onClick={restartQuiz}>Restart Quiz</RestartButton>
        </ResultsContainer>
      )}
    </QuizContainer>
  );
};

export default Quiz;
