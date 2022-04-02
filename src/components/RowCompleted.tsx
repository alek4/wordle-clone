import React from "react";
import { Tile } from "./Tile";
import { solution } from "../utils/getRandomWord";
import { evaluateWord } from "../utils/evaluateWord";

interface RowCompletedProps {
  guess: string;
}

export const RowCompleted: React.FC<RowCompletedProps> = ({ guess }) => {
  const currentStatus = evaluateWord(guess, solution)

  if (guess.length < 5) {
    const emptySpace = 5 - guess.length
    for (let i = 0; i < emptySpace; i++) {
      guess += " "      
    }
  }

  const guessArr = guess.split("");

  return (
    <>
      {guessArr.map((letter, i) => (
        <Tile key={i} value={letter} status={currentStatus[i].status} />
      ))}
    </>
  );
};
