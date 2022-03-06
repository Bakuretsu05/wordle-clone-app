import React from "react";
import { StyledRow } from "./styles";
import { WordleType } from "../../../../hooks/useWordle";
import Box from "../Box";

interface PropsType {
  payload: WordleType[] | string;
  row: number;
  currentRow: number;
}

const Row: React.FC<PropsType> = ({ payload }) => {
  const renderInput = (input: string) => {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < input.length; i++) {
      elements.push(<Box key={i} letter={input[i]} color={"none"} />);
    }
    for (let i = 0; i < 6 - input.length; i++) {
      elements.push(<Box key={input.length + i} letter={""} color={"none"} />);
    }
    return elements;
  };

  return (
    <StyledRow>
      {Array.isArray(payload)
        ? payload.map((item, index) => (
            <Box key={index} letter={item.letter} color={item.color} />
          ))
        : renderInput(payload)}
    </StyledRow>
  );
};

export default Row;
