import styled from "styled-components";

export const EndScreen = styled.div`
  z-index: 9999;
  position: absolute;
  max-width: 32rem;
  width: 90%;
  background-color: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.color.lighterPrimary};
  border-radius: 5px;
  padding: 1.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textColor.primary};
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
  width: 100%;
  text-align: center;
  line-height: 3rem;
`;

export const Stats = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const StatTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const StatValue = styled.h4`
  font-size: 2.2rem;
  text-align: center;
  letter-spacing: 0.1rem;
`;

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.wordle.color.green};
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textColor.primary};
  border-radius: 10px;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
