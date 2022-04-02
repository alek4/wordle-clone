import React from "react";
import { Tile } from "./Tile";

interface RowProps {
  guess: string;
}

export const Row: React.FC<RowProps> = ({ guess }) => {
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
        <Tile key={i} value={letter}  />
      ))}
    </>
  );
};
