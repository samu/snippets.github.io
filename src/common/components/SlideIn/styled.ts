import styled from "styled-components";

const Base = styled.div<{
  $isInView: boolean;
  $animationDuration: number;
  $animationDelay: number;
}>`
  transition: transform ${(props) => props.$animationDuration}s
      ${(props) => props.$animationDelay}s,
    opacity ${(props) => props.$animationDuration}s
      ${(props) => props.$animationDelay}s;

  opacity: ${(props) => (props.$isInView ? "1" : "0")};
`;

export const FromTopContainer = styled(Base)<{ $isInView: boolean }>`
  transform: ${(props) =>
    props.$isInView ? "translateY(0)" : "translateY(-5em)"};
`;

export const FromBottomContainer = styled(Base)<{ $isInView: boolean }>`
  transform: ${(props) =>
    props.$isInView ? "translateY(0)" : "translateY(5em)"};
`;

export const FromLeftContainer = styled(Base)<{ $isInView: boolean }>`
  transform: ${(props) =>
    props.$isInView ? "translateX(0)" : "translateX(-5em)"};
`;

export const FromRightContainer = styled(Base)<{ $isInView: boolean }>`
  transform: ${(props) =>
    props.$isInView ? "translateX(0)" : "translateX(5em)"};
`;
