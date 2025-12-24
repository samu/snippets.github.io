import styled from "styled-components";
import { ImageWrapper, Section } from "../common";

export const StyledSection = styled(Section)`
  display: none;

  background-color: var(--accent-color-1);
  color: var(--accent-contrast-color-1);
  min-height: 100vh;

  position: relative;

  @media (min-width: 1200px) {
    display: flex;
  }
`;

const ShadowMaker = styled.div<{ $hide: boolean }>`
  position: absolute;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  /* TODO remove? */
  transition: margin-top 1s;
  margin-top: ${(props) => (props.$hide ? "5em" : "0")};
`;

export const TopShadowLeft = styled(ShadowMaker)`
  top: -5em;
  box-shadow: 0 20px 18px rgba(var(--box-shadow-base-color), 0.9);
  transform: translateY(-2em) rotateZ(-0.75deg);
`;

export const TopShadowRight = styled(ShadowMaker)`
  top: -5em;
  box-shadow: 0 20px 18px rgba(var(--box-shadow-base-color), 0.9);
  transform: translateY(-2em) rotateZ(0.75deg);
`;

export const BottomShadowMaker = styled(ShadowMaker)`
  bottom: -5em;
  box-shadow: 0px 0px 40px rgba(var(--box-shadow-base-color), 0.9);
`;

export const Canvas = styled.div`
  height: 60em;
  width: 100em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledImageWrapper = styled(ImageWrapper).attrs({
  $boxShadow: true,
})`
  max-width: 55em;
`;

export const StyledTextBox = styled.div`
  margin-right: 5em;
  max-width: 30em;

  h1 {
    font-size: 5em;
  }

  p {
    text-align: center;
  }

  @media (max-width: 992px) {
    max-width: 30em;
  }
`;
