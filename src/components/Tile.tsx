import React from "react";

export interface TileProps {
  value: string;
  status?: "correct" | "present" | "incorrect";
}

export const Tile: React.FC<TileProps> = ({ value, status }) => {
  let classes =
    "flex items-center justify-center h-[3.9rem] text-gray-200 font-bold text-2xl";

  switch (status) {
    case "correct":
      classes += " bg-[#538D4E]";
      break;
    case "incorrect":
      classes += " bg-[#3A3A3C]";
      break;
    case "present":
      classes += " bg-[#B59F3B]";
      break;
    default:
      classes += " bg-neutral-800";
  }

  return <div className={classes}>{value.toUpperCase()}</div>;
};
