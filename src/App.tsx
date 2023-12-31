import { useCallback, useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import words from './wordList.json'
import './App.css'
import HangmanDrawing from './component/HangmanDrawing'
import HangmanWord from './component/HangmanWord'
import Keyboard from './component/keyboard'


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetter] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetter(currentLetter => [...currentLetter, letter])
  }, [guessedLetters])

  useEffect(() => {
    console.log("junaid")
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match('/^[a-z]$/')) return

      console.log("junaid1")
      // e.preventDefault()
      addGuessedLetter(key)
      console.log("key", key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [])


  console.log("guessedLetters: ", guessedLetters)
  console.log("wordToGuess:", wordToGuess)
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
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess} />
        <div style={{
          alignSelf: 'stretch'
        }}>
          <Keyboard />
        </div>
      </div>
    </>
  )
}

export default App
