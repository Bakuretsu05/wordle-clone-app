import React from "react";
import * as S from "./styles";
import { KeysType, StateType } from "../../types";
import KeyButton from "../KeyButton";

interface PropsType {
  keyList: KeysType[];
  letterProfile: StateType;
  handlePress: (KeyValue: KeysType) => void;
}

const KeyRow: React.FC<PropsType> = ({
  keyList,
  handlePress,
  letterProfile,
}) => {
  return (
    <S.KeyRow>
      {keyList.map((key) => (
        <KeyButton
          handlePress={handlePress}
          value={key}
          key={key}
          color={
            /^[A-Z]{1}$/.test(key.toUpperCase())
              ? letterProfile[key.toUpperCase() as keyof typeof letterProfile]
              : "none"
          }
        />
      ))}
    </S.KeyRow>
  );
};

export default KeyRow;
