import styled from "styled-components";
import { ColorType } from "../../../../App";

export const StyledBox = styled.div<{ color: ColorType }>`
  padding: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  font-weight: 700;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.textColor.primary};
  border: 2px solid ${({ theme }) => theme.color.secondary};
  background-color: ${(props) =>
    props.color !== "none" ? props.theme.wordle.color[props.color] : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
`;