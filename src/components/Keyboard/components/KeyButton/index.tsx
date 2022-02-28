import React from "react";
import { KeysType } from "../../types";
import * as S from "./styles";

interface PropsType {
  handlePress: (keyValue: KeysType) => void;
  value: KeysType;
}

const KeyButton: React.FC<PropsType> = ({ handlePress, value }) => {
  return <S.KeyButton onClick={() => handlePress(value)}>{value}</S.KeyButton>;
};

export default KeyButton;
