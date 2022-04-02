import { Row } from "./Row";
import { RowCompleted } from "./RowCompleted";

interface GridProps {
  currentGuess: string;
  guesses: Array<string>;
}

export const Grid: React.FC<GridProps> = ({
  currentGuess,
  guesses,
}) => {
  const emptyRows =
    guesses.length < 6 - 1
      ? Array.from(Array(6 - 1 - guesses.length))
      : [];

  return (
    <div className="grid grid-cols-5 grid-rows-6 w-[20.5rem] gap-1 mx-auto mt-16">
      {guesses.map((guess, i) => (
        <RowCompleted key={i} guess={guess} />
      ))}
      {guesses.length !== 6 ? <Row guess={currentGuess} /> : undefined}
      {emptyRows.map((_, i) => (
        <Row key={i} guess="" />
      ))}
    </div>
  );
};
