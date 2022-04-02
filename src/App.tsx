import React, { useState } from "react";
import "./App.css";
import { Grid } from "./components/Grid";
import { Keyboard } from "./components/Keyboard";
import { Popup } from "./components/Popup";

function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<Array<string>>([]);
  const [endGame, setEndGame] = useState({
    win: false,
    outOfGuesses: false
  });
  const [isWordNotInList, setIsWordNotInList] = useState(false)

  return (
    <>
      {endGame.win ? <Popup type={"win"}/> : undefined}
      {endGame.outOfGuesses ? <Popup type={"lost"}/> : undefined}
      {isWordNotInList ? <Popup type={"word-not-in-list"}/> : undefined}
      <Grid guesses={guesses} currentGuess={currentGuess}></Grid>
      <Keyboard
        setInputFn={setCurrentGuess}
        inputState={currentGuess}
        guesses={guesses}
        setEndGame={setEndGame}
        endGame={endGame}
        setIsWordNotInList={setIsWordNotInList}
        isWordNotInList={isWordNotInList}
      ></Keyboard>
    </>
  );
}

export default App;
