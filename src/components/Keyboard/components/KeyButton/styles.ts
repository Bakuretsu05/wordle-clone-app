import styled from "styled-components";
import { ColorType } from "../../../../hooks/useWordle";

export const KeyButton = styled.button<{ color: ColorType }>`
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textColor.primary};
  padding: 0.8rem;
  background-color: ${(props) =>
    props.color === "none"
      ? props.theme.color.secondary
      : props.theme.wordle.color[props.color]};
`;
