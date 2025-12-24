import { IllustrationFrame } from "@site/src/common/components/IllustrationFrame/IllustrationFrame";
import styled from "styled-components";
import { Section, SectionRow } from "../common";

export const StyledSection = styled(Section)`
  padding-top: 7em;
  padding-bottom: 10em;
  min-height: 100vh;

  h1,
  h2 {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-bottom: 1em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2.25em;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 3.5em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4em;
    }
  }
`;

export const StyledSectionRow = styled(SectionRow)`
  padding-left: 2em;
  padding-right: 2em;

  justify-content: space-between;
  max-width: 60em;

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

export const StyledTextBox = styled.div`
  max-width: 20em;

  @media (max-width: 992px) {
    max-width: 30em;
  }
`;

export const StyledIllustrationFrame = styled(IllustrationFrame)`
  max-width: 30em;
`;

export const RowSpacer = styled.div`
  height: 7.5em;
`;

export const TopShadowMaker = styled.div`
  position: absolute;
  top: -5em;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  box-shadow: 0px 0px 20px rgba(var(--box-shadow-base-color), 1);
  background-color: red;
`;

export const Ribbon = styled.div`
  position: absolute;
  left: 0;
  width: calc(100% + 10em);
  background-color: var(--accent-color-1);
`;

export const TopRibbon = styled(Ribbon)`
  top: 0;
  height: 10em;
  transform: translateX(-5em) translateY(-6.5em) rotateZ(2deg);
`;

export const BottomRibbon = styled(Ribbon)`
  bottom: 0;
  transform: translateX(-5em) translateY(6.5em) rotateZ(2deg);
  height: 12em;
`;
