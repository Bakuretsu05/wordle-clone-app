import React from "react";
import * as S from "./styles";
import { KeysType } from "./types";
import KeyRow from "./components/KeyRow";

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
  "BACKSPACE",
];

interface PropsType {
  handlePress: (KeyValue: KeysType) => void;
}

const Keyboard: React.FC<PropsType> = ({ handlePress }) => {
  return (
    <S.Keyboard>
      <KeyRow handlePress={handlePress} keyList={Keys.slice(0, 10)} />
      <KeyRow handlePress={handlePress} keyList={Keys.slice(10, 19)} />
      <KeyRow handlePress={handlePress} keyList={Keys.slice(19, 28)} />
    </S.Keyboard>
  );
};

export default Keyboard;
