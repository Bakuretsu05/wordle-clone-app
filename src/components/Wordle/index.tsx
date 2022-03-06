import React from "react";
import { StyledWordle } from "./styles";
import { WordleType } from "../../hooks/useWordle";
import Row from "./components/Row";

interface PropsType {
  wordles: WordleType[][];
  currentRow: number;
  input: string;
}

const Wordle: React.FC<PropsType> = ({ wordles, currentRow, input }) => {
  return (
    <StyledWordle>
      {wordles.map((wordle, index) => (
        <Row
          key={index}
          payload={index === currentRow - 1 ? input : wordle}
          row={index}
          currentRow={currentRow}
        />
      ))}
    </StyledWordle>
  );
};

export default Wordle;
