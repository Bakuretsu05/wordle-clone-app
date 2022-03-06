import React, { useEffect, useState } from "react";
import { Button as StyledButton } from "./components/EndScreen/styles";
import wordlist from "./wordlist";
import { ThemeProvider } from "styled-components";
import { Container, GlobalStyles, defaultTheme } from "./globalStyles";
import Wordle from "./components/Wordle";
import EndScreen from "./components/EndScreen";
import Keyboard from "./components/Keyboard";
import { KeysType } from "./components/Keyboard/types";
import useWordle from "./hooks/useWordle";
import useInput from "./hooks/useInput";

export const LS_KEY = "bakurdleStats";

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const { inputAdd, inputBackspace, inputDelete, input } = useInput();
  const { wordles, submitWordle, currentRow, resetWordle, word } = useWordle({
    wordlist: wordlist,
  });

  const handleSubmit = () => {
    if (input.length !== 6 || !wordlist.includes(input.toLowerCase())) return;
    submitWordle(input);
    inputDelete();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (/^[a-zA-Z]{1}$/.test(e.key)) inputAdd(e.key);
    else if (e.key === "Enter") handleSubmit();
  };

  const handleDelete = (
    e: React.KeyboardEvent<HTMLDivElement> | "DISPATCH"
  ) => {
    if (typeof e === "object" && !(e.key === "Backspace")) return;
    else if (typeof e !== "object" && !(e === "DISPATCH")) return;
    inputBackspace();
  };

  const handleKeyboard = (value: KeysType) => {
    if (value === "ENTER") handleSubmit();
    else if (value === "BACKSPACE") inputBackspace();
    else inputAdd(value);
  };

  const handleNewGame = () => {
    resetWordle();
    inputDelete();
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
        ) : isPlaying ? (
          <Keyboard handlePress={handleKeyboard} />
        ) : (
          <StyledButton onClick={() => setShowEndScreen(true)}>
            Show End Screen
          </StyledButton>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;
