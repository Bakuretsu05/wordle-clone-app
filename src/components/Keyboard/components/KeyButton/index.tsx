import React from "react";
import { ColorType } from "../../../../hooks/useWordle";
import { KeysType } from "../../types";
import * as S from "./styles";

interface PropsType {
  handlePress: (keyValue: KeysType) => void;
  value: KeysType;
  color: ColorType;
}

const KeyButton: React.FC<PropsType> = ({ handlePress, value, color }) => {
  return (
    <S.KeyButton onClick={() => handlePress(value)} color={color}>
      {value}
    </S.KeyButton>
  );
};

export default KeyButton;
