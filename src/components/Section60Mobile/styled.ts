import { IPhoneX } from "@site/src/common/components/IPhoneX/IPhoneX";
import styled from "styled-components";
import { Section, SectionRow } from "../common";

export const StyledSection = styled(Section)`
  display: none;
  background-color: var(--accent-color-1);
  color: var(--accent-contrast-color-1);
  min-height: 100vh;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);

  h1 {
    font-size: 4em;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledIPhoneX = styled(IPhoneX)`
  width: 20em;
`;

export const SytledBottomRow = styled(SectionRow)`
  margin-top: 5em;
  margin-bottom: 5em;
`;
