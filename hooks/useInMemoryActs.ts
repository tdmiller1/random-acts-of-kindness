import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSessionStorage } from "./useSessionsStorage";

export type RandomActType = {
  id: number;
  title: string;
  checked: boolean;
};

export const randomActs: {[key: number]: RandomActType} = {
  1: {
    id: 1,
    title: "Compliment someone's outfit",
    checked: false,
  },
  2: {
    id: 2,
    title: "Hold the door open for someone",
    checked: false,
  },
  3: {
    id: 3,
    title: "Write a thank-you note to a coworker",
    checked: false,
  },
  4: {
    id: 4,
    title: "Help someone carry their groceries",
    checked: false,
  },
 5: {
    id: 5,
    title: "Give up your seat on public transport",
    checked: false,
  },
  6: {
    id: 6,
    title: "Buy coffee for the person behind you in line",
    checked: false,
  },
 7: {
    id: 7,
    title: "Leave a positive review for a local business",
    checked: false,
  },
  8:{
    id: 8,
    title: "Pick up litter in your neighborhood",
    checked: false,
  },
  9: {
    id: 9,
    title: "Send a text to check in on a friend",
    checked: false,
  },
  10: {
    id: 10,
    title: "Donate to a local charity or cause",
    checked: false,
  },
}


export const useInMemoryActs = (
): [
  { [key: number]: RandomActType },
  Dispatch<SetStateAction<{ [key: number]: RandomActType }>>
] => {
  console.log(randomActs);
  const [acts, setActs, removeActsStorage] = useSessionStorage(
    "acts1",
    randomActs
  );

  console.log("useInMemoryActs", acts);


  return [
    acts,
    (value) => {
      console.log("setting this value:", value);
      setActs(value);
    },
  ];
};