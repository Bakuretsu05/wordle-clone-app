import React from "react";
import { StyledDimmer } from "./styles";

interface PropsType {
  zIndex: number;
}

const Dimmer: React.FC<PropsType> = ({ zIndex }) => {
  return <StyledDimmer zIndex={zIndex} />;
};

export default Dimmer;
