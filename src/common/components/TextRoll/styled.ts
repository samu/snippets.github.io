import styled, { keyframes } from "styled-components";

export const OuterContainer = styled.div`
  display: inline-flex;
  position: relative;
  width: 7em;
`;

export const Text1Static = styled.div`
  position: absolute;
  width: 100%;
`;

const SlideOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
  50% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
  100% {
    opacity: 0;
    transform: rotateX(-90deg) translateY(1em);
  }
`;

const SlideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(90deg) translateY(-0.33em);
  }
  50% {
    opacity: 0;
    transform: rotateX(90deg) translateY(-0.33em);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
`;

export const StaticText = styled.div`
  position: absolute;
  width: 100%;
`;

export const AnimatedText = styled(StaticText)<{
  $animation: "in" | "out";
}>`
  animation-name: ${(props) =>
    props.$animation === "in" ? SlideInAnimation : SlideOutAnimation};
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;
