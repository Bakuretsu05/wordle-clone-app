import styled from "styled-components";

export const Score = styled.div`
  max-width: 32rem;
  width: 90%;
  background-color: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.color.lighterPrimary};
  border-radius: 5px;
  padding: 2.5rem;
  position: absolute;
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textColor.primary};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.7rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColor.primary};
  font-weight: 400;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StatsTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.07rem;
`;

export const StatsItems = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StatsItem = styled.div`
  text-align: center;
`;

export const ItemNumber = styled.h3`
  font-weight: 400;
  font-size: 2.5rem;
`;

export const ItemText = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
`;
