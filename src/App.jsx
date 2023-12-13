import { useState } from 'react'
import ScoreDisplay from './components/scoredisplay'
import Game from './components/game';
import './App.css'


function App() {
  const [currentScore,setCurrentScore] = useState(0);
  const [highScore,setHighScore] = useState(0);

  return (
    <>
      <div className='header'>
        <div><h1>Memory Cards</h1></div>
        <ScoreDisplay currentScore={currentScore} highScore={highScore} className={"scoreDisplay"} />
      </div>
      <Game currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore}/>
    </>
  )
}

export default App
