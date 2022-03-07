import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { KeysType, StateType } from "./types";
import KeyRow from "./components/KeyRow";
import { WordleType } from "../../hooks/useWordle";

const Keys: KeysType[] = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<--",
];

interface PropsType {
  handlePress: (KeyValue: KeysType) => void;
  wordles: WordleType[][];
  currentRow: number;
}

const Keyboard: React.FC<PropsType> = ({
  handlePress,
  currentRow,
  wordles,
}) => {
  const [letterProfile, setLetterProfile] = useState<StateType>({
    A: "none",
    B: "none",
    C: "none",
    D: "none",
    E: "none",
    F: "none",
    G: "none",
    H: "none",
    I: "none",
    J: "none",
    K: "none",
    L: "none",
    M: "none",
    N: "none",
    O: "none",
    P: "none",
    Q: "none",
    R: "none",
    S: "none",
    T: "none",
    U: "none",
    V: "none",
    W: "none",
    X: "none",
    Y: "none",
    Z: "none",
  });

  useEffect(() => {
    if (currentRow < 2) return;
    wordles[currentRow - 2].forEach((wordle) => {
      setLetterProfile((currLetterProfile) => {
        if (
          currLetterProfile[
            wordle.letter.toUpperCase() as keyof typeof currLetterProfile
          ] === "green" ||
          (currLetterProfile[
            wordle.letter.toUpperCase() as keyof typeof currLetterProfile
          ] === "yellow" &&
            wordle.color === "gray")
        )
          return currLetterProfile;
        return {
          ...currLetterProfile,
          [wordle.letter.toUpperCase()]: wordle.color,
        };
      });
    });
  }, [wordles, currentRow]);

  return (
    <S.Keyboard>
      <KeyRow
        letterProfile={letterProfile}
        handlePress={handlePress}
        keyList={Keys.slice(0, 10)}
      />
      <KeyRow
        letterProfile={letterProfile}
        handlePress={handlePress}
        keyList={Keys.slice(10, 19)}
      />
      <KeyRow
        letterProfile={letterProfile}
        handlePress={handlePress}
        keyList={Keys.slice(19, 28)}
      />
    </S.Keyboard>
  );
};

export default Keyboard;
