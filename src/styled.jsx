import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #fff;
`;

export const WelcomeText = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
`;

export const GameSelector = styled.div`
  margin-bottom: 20px;
`;

export const GameButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const GameContainer = styled.div`
  display: none; /* Hide the game container */
`;

export const QuizContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  text-align: center;
`;

export const QuestionText = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

export const OptionList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content:center;
`;

export const OptionButton = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


export const ResultsContainer = styled.div`
  text-align: center;
`;

export const Results = styled.div`
  background-color: ${(props) => (props.correct ? 'lightgreen' : 'lightcoral')};
  border-radius: 10px;
  margin: 10px 0;
  padding: 15px;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const RestartButton = styled.button`
  padding: 10px 20px;
  background-color: #FFB200;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  margin-top: 20px;

  &:hover {
    background-color:rgb(255, 196, 0);
  }
`;

export const ResultText = styled.span`
  color: black;
  font-weight: bold;
  display: inline-block;
  margin-left: 10px;
`;
