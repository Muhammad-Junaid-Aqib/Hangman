import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import words from './wordList.json'
import './App.css'
import HangmanDrawing from './component/HangmanDrawing'
import HangmanWord from './component/HangmanWord'
import Keyboard from './component/keyboard'


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
  return words[Math.floor(Math.random() * words.length )]
  })
  console.log(wordToGuess)
  return (
    <>
      <div
        style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center"
      }}
      >
        <div
          style={{
            fontSize: "2rem",
            textAlign: "center",
        }}
        >
          Lose Win
        </div>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard/>
      </div>
    </>
  )
}

export default App
