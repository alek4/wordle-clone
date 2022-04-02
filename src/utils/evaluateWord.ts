import { statusObj, typeStatus } from "./types";

export function evaluateWord(
  guess: string,
  solution: string
): typeStatus {
  if (guess === solution) {
    return [
      { status: "correct" },
      { status: "correct" },
      { status: "correct" },
      { status: "correct" },
      { status: "correct" },
    ];
  }

  let currentStatus: Array<statusObj> = [];

  let solutionCpy = solution;

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];

    if (solution[i] === letter) {
      currentStatus.push({ status: "correct" });
      solutionCpy = solutionCpy.replace(letter, "");
    } else if (solutionCpy.includes(letter)) {
      currentStatus.push({ status: "present" });
      solutionCpy = solutionCpy.replace(letter, "");
    } else {
      currentStatus.push({ status: "incorrect" });
    }
  }

  return currentStatus;
}
