/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { solution } from "../utils/getRandomWord";
import { isInWordList } from "../utils/isInWordList";

interface KeyboardProps {
  setInputFn: React.Dispatch<React.SetStateAction<string>>;
  inputState: string;
  guesses: Array<string>;
  setEndGame: React.Dispatch<
    React.SetStateAction<{
      win: boolean;
      outOfGuesses: boolean;
    }>
  >;
  endGame: {
    win: boolean;
    outOfGuesses: boolean;
  };
  setIsWordNotInList: React.Dispatch<React.SetStateAction<boolean>>;
  isWordNotInList: boolean;
}

export const Keyboard: React.FC<KeyboardProps> = ({
  setInputFn,
  inputState,
  guesses,
  setEndGame,
  endGame,
  setIsWordNotInList,
  isWordNotInList,
}) => {
  const row_keybord = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["delete", "z", "x", "c", "v", "b", "n", "m", "enter"],
  ];

  function deleteIsPressed() {
    setInputFn((preState) => {
      return preState.slice(0, -1);
    });
  }

  function enterIsPressed() {
    setIsWordNotInList(false);

    if (inputState.length === 5) {
      if (isInWordList(inputState)) {
        guesses.push(inputState);

        if (solution === inputState) {
          setEndGame({
            win: true,
            outOfGuesses: false,
          });
        } else if (guesses.length === 6) {
          setEndGame({
            win: false,
            outOfGuesses: true,
          });
        }

        setInputFn("");
      } else {
        // word not in list
        setIsWordNotInList(true);
      }
    }
  }

  function addLetterToRow(letter: string) {
    if (
      letterIsValid(letter) &&
      !(endGame.win || endGame.outOfGuesses)
    ) {
      if (letter === "delete" || letter === "Backspace") {
        deleteIsPressed();
        return;
      }

      if (letter === "enter" || letter === "Enter") {
        enterIsPressed();
        return;
      }

      setInputFn((preState) => {
        if (preState.length < 5) {
          return preState + letter;
        } else {
          return preState;
        }
      });
    }
  }

  function letterIsValid(letter: string) {
    return (
      row_keybord[0].includes(letter) ||
      row_keybord[1].includes(letter) ||
      row_keybord[2].includes(letter) ||
      letter === "Enter" ||
      letter === "Backspace"
    );
  }

  const handleKeypress = useCallback(
    (e) => {
      addLetterToRow(e.key);
      // console.log(e.key);
    },
    [inputState]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [handleKeypress]);

  return (
    <div className="flex flex-col items-center absolute bottom-16 left-1/2 translate-x-[-50%] w-full">
      <div className="mb-3">
        {row_keybord[0].map((l) => (
          <button
            key={l}
            onClick={() => addLetterToRow(l)}
            className="keyboard-btn"
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="mb-3">
        {row_keybord[1].map((l) => (
          <button
            key={l}
            onClick={() => addLetterToRow(l)}
            className="keyboard-btn"
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="">
        {row_keybord[2].map((l) => (
          <button
            key={l}
            onClick={() => addLetterToRow(l)}
            className="keyboard-btn"
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};
