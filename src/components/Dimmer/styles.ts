import styled from "styled-components";

export const StyledDimmer = styled.div<{ zIndex: number }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  z-index: ${(props) => props.zIndex};
`;
