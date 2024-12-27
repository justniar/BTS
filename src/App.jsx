import React, { useState } from 'react';
import './App.css';
import PickANumber from './component/PickANumber';
import Quiz from './component/Quiz';
import RocketGame from './component/RocketGame';
import StoryGame from './component/StoryGame';
import { AppContainer, GameButton, GameSelector, WelcomeText } from './styled';

function App() {
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameSelection = (game) => {
    setSelectedGame(game);
  };

  return (
    <AppContainer>
      <WelcomeText>Welcome to the Game</WelcomeText>

      <GameSelector>
        <GameButton onClick={() => handleGameSelection('Quiz')}>Quiz</GameButton>
        <GameButton onClick={() => handleGameSelection('PickANumber')}>Pick A Number</GameButton>
        <GameButton onClick={() => handleGameSelection('StoryGame')}>Story Game</GameButton>
        <GameButton onClick={() => handleGameSelection('RocketGame')}>Rocket Game</GameButton>
      </GameSelector>

      {selectedGame && (
        <>
          {selectedGame === 'Quiz' && <Quiz />}
          {selectedGame === 'PickANumber' && <PickANumber />}
          {selectedGame === 'StoryGame' && <StoryGame />}
          {selectedGame === 'RocketGame' && <RocketGame />}
        </>
      )}
    </AppContainer>
  );
}

export default App;
