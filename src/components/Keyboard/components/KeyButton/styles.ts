import styled from "styled-components";

export const KeyButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textColor.primary};
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.color.secondary};
`;
