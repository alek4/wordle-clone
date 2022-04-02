import { words } from "../wordList";

export function isInWordList(word: string) {
  return words.includes(word.toLowerCase());
}
