import styled from "styled-components";
import { ImageWrapper, Section, SectionRow } from "../common";

export const StyledSection = styled(Section)`
  box-shadow: 0 -10px 30px rgba(var(--box-shadow-base-color), 0.9);
  min-height: 100vh;
  position: relative;
  padding-bottom: 5em;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8em;
  padding-bottom: 4em;
  padding-left: 1em;
  padding-right: 1em;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    margin: 0;
    width: 100%;
    padding-bottom: 1em;
  }

  h2 {
    position: relative;
    margin-bottom: 2em;
    font-size: 1em;

    span {
      position: relative;
      z-index: 1;
    }

    svg {
      position: absolute;
      top: 0.25em;
      left: 0;
      z-index: 0;
      scale: 1.1;
    }
  }

  ul {
    max-width: 50em;

    li {
      margin-bottom: 1em;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 0.95em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.25em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.5em;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 4em;
    }
  }
`;

export const DoneRight = styled.span`
  position: relative;

  svg {
    position: absolute;
    top: -0.25em;
    left: 0;
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1;
    /* filter: drop-shadow(0px 3px 2px rgba(var(--box-shadow-base-color), 0.25)); */
    margin-left: 0.125em;
    color: var(--oc-yellow-9);
  }
`;

export const IntroRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-bottom: 4em;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  p {
    max-width: 20em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    position: relative;
    text-align: center;

    span {
      position: relative;
      z-index: 1;
    }
  }

  p:nth-child(1) svg {
    position: absolute;
    top: -4em;
    left: 0em;
    z-index: 0;
  }

  p:nth-child(2) svg {
    position: absolute;
    top: -5em;
    right: 3em;
    z-index: 0;
    rotate: 10deg;
  }
`;

export const StyledSectionRow = styled(SectionRow)`
  margin-bottom: 5em;
  padding-left: 1em;
  padding-right: 1em;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const StyledSectionRowReverse = styled(StyledSectionRow)`
  flex-direction: row-reverse;

  @media (max-width: 992px) {
    flex-direction: column;
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

export const TopShadow = styled(ShadowMaker)`
  top: -5em;
  box-shadow: 0 10px 30px rgba(var(--box-shadow-base-color), 0.9);
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
  max-width: 40em;
`;

export const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  @media (min-width: 992px) {
    max-width: 30em;
    text-align: right;
    align-items: flex-end;
    margin-right: 2em;

    h1 {
      font-size: 3em;
    }
  }
`;

export const StyledTextBoxReversed = styled(StyledTextBox)`
  @media (min-width: 992px) {
    text-align: left;
    align-items: flex-start;
    margin-left: 2em;
    margin-right: 0;
  }
`;

export const NotMarkdownRow = styled(SectionRow)`
  padding-left: 1em;
  padding-right: 1em;

  h1 {
    font-size: 1.25em;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5em;
    }
  }

  p {
    max-width: 39em;
    text-align: center;
  }

  span {
    position: relative;

    span {
      position: relative;
      z-index: 1;
    }
  }

  svg {
    position: absolute;
    top: 0.4em;
    left: -0.3em;
    width: 2.25em;
    z-index: 0;
  }
`;
