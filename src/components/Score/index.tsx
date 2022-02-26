import React, { useState } from "react";
import * as S from "./styles";
import { LS_KEY } from "../../App";

const nullScoresString = '[{ word:"N/A",guess: -1,isWin: false}]';

interface PropsType {
  handleClose: () => void;
}

const Score: React.FC<PropsType> = ({ handleClose }) => {
  const [stats] = useState(() =>
    JSON.parse(localStorage.getItem(LS_KEY) || nullScoresString)
  );

  const calculatePercentage = () => {
    let win = 0;
    let lose = 0;
    stats.forEach((stat: { isWin: boolean }) => {
      stat.isWin ? win++ : lose++;
    });
    return lose > 0 ? (win / lose) * 100 : 100;
  };

  return (
    <S.Score>
      <S.CloseButton onClick={handleClose}>X</S.CloseButton>
      <S.Stats>
        <S.StatsTitle>STATISTICS</S.StatsTitle>
        <S.StatsItems>
          <S.StatsItem>
            <S.ItemNumber>{stats.length}</S.ItemNumber>
            <S.ItemText>{"Played"}</S.ItemText>
          </S.StatsItem>
          <S.StatsItem>
            <S.ItemNumber>{calculatePercentage()}</S.ItemNumber>
            <S.ItemText>{"Win %"}</S.ItemText>
          </S.StatsItem>
        </S.StatsItems>
      </S.Stats>
    </S.Score>
  );
};

export default Score;
