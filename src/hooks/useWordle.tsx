import { useState } from "react";

export type ColorType = "none" | "yellow" | "green" | "gray";

export interface WordleType {
  letter: string;
  color: ColorType;
}

const defaultWordles: WordleType[][] = [
  [
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
  ],
  [
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
  ],
  [
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
  ],
  [
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
  ],
  [
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
  ],
  [
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
    { letter: "", color: "none" },
  ],
];

const useWordle = ({ wordlist }: { wordlist: string[] }) => {
  const [word, setWord] = useState(() => {
    return wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase();
  });
  const [wordles, setWordles] = useState<WordleType[][]>(defaultWordles);
  const [currentRow, setCurrentRow] = useState(1);

  const formatWordle = (input: string): WordleType[] => {
    const newWordle: WordleType[] = [];
    let noYellow = word;
    let currentWord = word;

    for (let i = 0; i < input.length; i++) {
      if (currentWord.includes(input[i])) {
        if (input[i] === currentWord[i]) {
          currentWord = currentWord.replace(input[i], "#");
          newWordle.push({ letter: input[i], color: "green" });
        } else if (noYellow.includes(input[i])) {
          noYellow = noYellow.replace(input[i], "#");
          newWordle.push({ letter: input[i], color: "yellow" });
        } else {
          newWordle.push({ letter: input[i], color: "gray" });
        }
      } else {
        newWordle.push({ letter: input[i], color: "gray" });
      }
    }
    return newWordle;
  };

  const submitWordle = (input: string) => {
    if (input.length !== 6 || !wordlist.includes(input.toLowerCase())) return;

    setWordles((currWordles) => {
      const newWordles = [...currWordles];
      newWordles[currentRow - 1] = formatWordle(input);
      return newWordles;
    });
    setCurrentRow((currRow) => currRow + 1);
  };

  const resetWordle = () => {
    setWord(
      wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase()
    );
    setCurrentRow(1);
    setWordles(defaultWordles);
  };

  return { wordles, submitWordle, currentRow, resetWordle, word };
};

export default useWordle;
