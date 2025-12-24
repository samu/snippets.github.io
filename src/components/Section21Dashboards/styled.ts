import styled from "styled-components";
import { ImageWrapper, Section } from "../common";

export const StyledSection = styled(Section)`
  min-height: 100vh;
  background-color: var(--accent-color-1);
  box-shadow: inset 0px 10px 60px rgba(var(--box-shadow-base-color), 0.75);

  color: var(--accent-contrast-color-1);

  padding-left: 1em;
  padding-right: 1em;

  h1 {
    font-size: 3em;
    margin-top: 2em;
    margin-bottom: 0.5em;
    position: relative;

    span {
      position: relative;
      z-index: 1;
      filter: drop-shadow(0px 10px 5px var(--oc-red-9));
    }

    svg {
      position: absolute;
      top: -0.66em;
      left: 0;
      z-index: 0;
      transform: scaleX(1.7);
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 5em;
    }
  }

  h2 {
    position: relative;
    margin-bottom: 2em;

    span {
      position: relative;
      z-index: 1;
      filter: drop-shadow(0px 4px 3px rgba(var(--box-shadow-base-color), 0.5));
    }

    svg {
      position: absolute;
      top: 0.95em;
      left: 0;
      z-index: 0;
    }
  }

  p {
    max-width: 30em;
    text-align: center;
    margin-bottom: 3em;
    font-size: 1.25em;
  }

  padding-bottom: 10em;
`;

export const StyledImageWrapper = styled(ImageWrapper).attrs({
  $boxShadow: true,
})`
  max-width: 70em;
`;
