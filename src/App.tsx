import React, { useEffect, useState } from "react";
import { Button as StyledButton } from "./components/EndScreen/styles";
import wordlist from "./wordlist";
import { ThemeProvider } from "styled-components";
import { Container, GlobalStyles, defaultTheme } from "./globalStyles";
import Wordle from "./components/Wordle";
import EndScreen from "./components/EndScreen";

export const LS_KEY = "bakurdleStats";

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

const formatWordle = (input: string, word: string): WordleType[] => {
  const newWordle: WordleType[] = [];
  let noYellow = word;
  for (let i = 0; i < input.length; i++) {
    if (word.includes(input[i])) {
      if (input[i] === word[i]) {
        word = word.replace(input[i], "#");
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

const App: React.FC = () => {
  const [word, setWord] = useState(() => {
    return wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase();
  });
  const [wordles, setWordles] = useState<WordleType[][]>(defaultWordles);
  const [input, setInput] = useState("");
  const [currentRow, setCurrentRow] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEndScreen, setShowEndScreen] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (/^[a-zA-Z]{1}$/.test(e.key)) {
      setInput((currInput) => {
        if (currInput.length < 6) {
          return (currInput + e.key).toUpperCase();
        }
        return currInput;
      });
    } else if (e.key === "Enter") handleSubmit();
  };

  const handleDelete = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Backspace") setInput((currInput) => currInput.slice(0, -1));
  };

  const handleSubmit = () => {
    if (input.length !== 6 || !wordlist.includes(input.toLowerCase())) return;

    setWordles((currWordles) => {
      const newWordles = [...currWordles];
      newWordles[currentRow - 1] = formatWordle(input, word);
      return newWordles;
    });
    setCurrentRow((currRow) => currRow + 1);
    setInput("");
  };

  const handleNewGame = () => {
    console.log("here");
    setWord(
      wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase()
    );
    setWordles(defaultWordles);
    setInput("");
    setCurrentRow(1);
    setShowEndScreen(false);
    setIsPlaying(true);
  };

  const handleShare = () => {};

  useEffect(() => {
    if (currentRow > 6) setIsPlaying(false);
    if (
      currentRow > 1 &&
      wordles[currentRow - 2].every((wordle) => wordle.color === "green")
    ) {
      setIsPlaying(false);
    }
  }, [currentRow, wordles]);

  useEffect(() => {
    if (!isPlaying) {
      const currentStats = JSON.parse(localStorage.getItem(LS_KEY) || "[]");
      localStorage.setItem(
        LS_KEY,
        JSON.stringify([
          ...currentStats,
          {
            word: word,
            guess: currentRow - 1,
            isWin: wordles[currentRow - 2].every(
              (wordle) => wordle.color === "green"
            ),
          },
        ])
      );
      setShowEndScreen(true);
    }
  }, [isPlaying, currentRow, word, wordles]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        onKeyPress={isPlaying ? handleKeyPress : undefined}
        onKeyDown={handleDelete}
        tabIndex={0}
      >
        <GlobalStyles />
        <Wordle wordles={wordles} currentRow={currentRow} input={input} />
        {showEndScreen ? (
          <EndScreen
            isWin={wordles[currentRow - 2].every(
              (wordle) => wordle.color === "green"
            )}
            guess={currentRow - 1}
            word={word}
            handleClose={() => setShowEndScreen(false)}
            handleNewGame={handleNewGame}
            handleShare={handleShare}
          />
        ) : (
          !isPlaying && (
            <StyledButton onClick={() => setShowEndScreen(true)}>
              Show End Screen
            </StyledButton>
          )
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
