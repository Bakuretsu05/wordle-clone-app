import React from "react";
import { StyledBox } from "./styles";
import { ColorType } from "../../../../App";

interface PropsType {
  letter: string;
  color: ColorType;
}

const Box: React.FC<PropsType> = ({ letter, color }) => {
  return <StyledBox color={color}>{letter}</StyledBox>;
};

export default Box;
