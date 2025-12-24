import styled from "styled-components";
import { Section, SectionRow } from "../common";

export const StyledSection = styled(Section)`
  position: relative;

  padding-top: 5em;
  padding-bottom: 5em;

  min-height: 40em;

  h1 {
    display: flex;
    align-items: center;
    font-size: 3em;
    margin: 0;
    margin-bottom: 0.5em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2em;
    }
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 3em;
    font-size: 1.25em;
    position: relative;

    span {
      position: relative;
      z-index: 1;
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-3.4em) translateY(-2.6em) rotate(-3deg);
      z-index: 0;
    }
  }

  ul {
    margin: 0;
    margin-top: 1em;
  }

  .sync-icon {
    position: absolute;
    scale: 13;
    opacity: 0.05;
    color: var(--oc-blue-5);
  }

  .shimmer {
    --base: var(--oc-orange-5);
    --highlight: var(--oc-orange-3);

    color: transparent;
    background-image: linear-gradient(
      90deg,
      var(--base) 0%,
      var(--highlight) 1%,
      var(--base) 100%
    );
    background-size: 200% 100%;
    background-position: 0% 50%;

    -webkit-background-clip: text;
    background-clip: text;

    animation: shimmer 3s linear infinite;

    margin-right: 0.25em;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 50%;
    }

    70% {
      background-position: -200% 50%;
    }

    /* pause */
    100% {
      background-position: -200% 50%;
    }
  }

  .anything {
    position: relative;
    font-size: 1.5em;
    rotate: -7deg;
    translate: 0.1em -0.1em;
    color: var(--oc-lime-5);
    filter: drop-shadow(0px 2px 2px var(--oc-green-4));
  }

  h4 {
    display: flex;
    align-items: flex-end;
    margin-top: 3em;
    font-size: 1.75em;

    svg {
      margin-left: 0.25em;
    }
  }
`;

export const GitHubLogoWrapper = styled.div`
  width: 3em;
  margin-left: 2em;

  @media (min-width: 768px) {
    width: 4em;
  }
`;

export const StyledMainSectionRow = styled(SectionRow)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    display: flex;
    justify-content: center;

    svg {
      width: 1em;
      margin-left: 0.5em;
    }

    position: relative;
  }

  div {
    margin: 0;
    margin-top: 1em;
    max-width: 25em;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;

    div {
      max-width: 17.5em;
    }
  }
`;
