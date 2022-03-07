import React from "react";
import * as S from "./styles";
import { KeysType, StateType } from "../../types";
import KeyButton from "../KeyButton";

interface PropsType {
  keyList: KeysType[];
  letterProfile: StateType;
  handlePress: (KeyValue: KeysType) => void;
}

const KeyRow: React.FC<PropsType> = ({ keyList, handlePress }) => {
  return (
    <S.KeyRow>
      {keyList.map((key) => (
        <KeyButton handlePress={handlePress} value={key} key={key} />
      ))}
    </S.KeyRow>
  );
};

export default KeyRow;
