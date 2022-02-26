import React from "react";
import * as S from "./styles";
import { CloseButton as StyledCloseButton } from "../Score/styles";
import Dimmer from "../Dimmer";

interface PropsType {
  isWin: boolean;
  word: string;
  guess: number;
  handleClose: () => void;
  handleNewGame: () => void;
  handleShare: () => void;
}

const EndScreen: React.FC<PropsType> = ({
  isWin,
  guess,
  word,
  handleClose,
  handleNewGame,
  handleShare,
}) => {
  return (
    <>
      <Dimmer zIndex={999} />

      <S.EndScreen>
        <StyledCloseButton onClick={handleClose}>X</StyledCloseButton>
        <S.Title>
          {isWin ? "Congrats! (Flite is better tho)" : "Skill Issue..."}
        </S.Title>

        <S.Stats>
          <S.Stat>
            <S.StatTitle>Word: </S.StatTitle>
            <S.StatValue>{word}</S.StatValue>
          </S.Stat>
          <S.Stat>
            <S.StatTitle>Guess(es): </S.StatTitle>
            <S.StatValue>{guess}</S.StatValue>
          </S.Stat>
        </S.Stats>

        <S.Button onClick={handleNewGame}>PLAY AGAIN</S.Button>
        <S.Button onClick={handleShare}>SHARE ;D</S.Button>
      </S.EndScreen>
    </>
  );
};

export default EndScreen;
