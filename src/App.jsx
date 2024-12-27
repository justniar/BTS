import './App.css';
import PickANumber from './component/PickANumber';
import Quiz from './component/Quiz';
import RocketGame from './component/RocketGame';
import StoryGame from './component/StoryGame';

function App() {
  return (
    <>
      <Quiz/>
      <PickANumber/>
      <StoryGame/>
      <RocketGame/>
    </>
  );
}

export default App;
