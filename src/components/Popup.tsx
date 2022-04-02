import React from "react";
import { solution } from "../utils/getRandomWord";

interface PopupProps {
  type: "lost" | "word-not-in-list" | "win";
}

export const Popup: React.FC<PopupProps> = ({ type }) => {
  let classes =
    "absolute z-20 top-24 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-md px-4 py-1 text-white";
  const message =
    type === "word-not-in-list"
      ? "Word not in list"
      : type === "lost"
      ? "You lost. The word was " + solution
      : type === "win"
      ? "You won!"
      : undefined;

  classes += type === "win" ? " bg-green-500" : " bg-red-500 ";

  return (
    <>
      {/* <div className="absolute top-0 w-full h-full z-10 bg-black opacity-30"></div> */}
      <div className={classes}>
        <p className="text-center">{message}</p>
      </div>
    </>
  );
};
