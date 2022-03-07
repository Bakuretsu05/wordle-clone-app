import React, { useEffect, useRef, useState, useCallback } from "react";
import wordlist from "./wordlist";
import { KeysType } from "./components/Keyboard/types";

// styles
import { ThemeProvider } from "styled-components";
import { Container, GlobalStyles, defaultTheme } from "./globalStyles";

// components
import { Button as StyledButton } from "./components/EndScreen/styles";
import Wordle from "./components/Wordle";
import EndScreen from "./components/EndScreen";
import Keyboard from "./components/Keyboard";

// hooks
import useWordle from "./hooks/useWordle";
import useInput from "./hooks/useInput";

export const LS_KEY = "bakurdleStats";

const App: React.FC = () => {
  const appRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const { inputAdd, inputBackspace, inputDelete, input } = useInput();
  const { wordles, submitWordle, currentRow, resetWordle, word } = useWordle({
    wordlist: wordlist,
  });

  const handleSubmit = useCallback(() => {
    if (input.length !== 6 || !wordlist.includes(input.toLowerCase())) return;
    submitWordle(input);
    inputDelete();
  }, [input, submitWordle, inputDelete]);

  const handleNewGame = useCallback(() => {
    resetWordle();
    inputDelete();
    setShowEndScreen(false);
    setIsPlaying(true);
  }, [resetWordle, inputDelete]);

  const handleInput = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.nativeEvent.type === "keypress" && /^[a-zA-Z]{1}$/.test(e.key))
        inputAdd(e.key);
      else if (e.nativeEvent.type === "keypress" && e.key === "Enter")
        handleSubmit();
      else if (e.key === "Backspace") inputBackspace();
    },
    [handleSubmit, inputAdd, inputBackspace]
  );

  const handleKeyboard = useCallback(
    (value: KeysType) => {
      if (value === "ENTER") handleSubmit();
      else if (value === "<--") inputBackspace();
      else inputAdd(value);
    },
    [handleSubmit, inputAdd, inputBackspace]
  );

  const handleShare = () => {
    const getRowEmotes = (row: number) => {
      let emotes = "";
      wordles[row].forEach(({ color }) => {
        emotes += color === "green" ? "🟩" : color === "yellow" ? "🟨" : "⬛";
      });
      return emotes;
    };
    const getSquaresEmote = () => {
      let emotes = "";
      wordles.forEach((wordle, index) => {
        emotes += `${getRowEmotes(index)}\n`;
      });
      return emotes;
    };
    navigator.clipboard.writeText(
      `Bakurdle :D  ${currentRow - 1}/6\n${getSquaresEmote()}`
    );
  };

  useEffect(() => {
    appRef.current && appRef.current.focus();
  });

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
      <GlobalStyles />
      <Container
        onKeyPress={isPlaying ? handleInput : undefined}
        onKeyDown={handleInput}
        tabIndex={0}
        ref={appRef}
      >
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
