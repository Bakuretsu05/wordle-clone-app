import React from "react";
import * as S from "./styles";
import KeyRow from "./components/KeyRow";

const Keyboard: React.FC = () => {
  return (
    <S.Keyboard>
      <KeyRow />
      <KeyRow />
      <KeyRow />
    </S.Keyboard>
  );
};

export default Keyboard;
