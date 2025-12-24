import styled from "styled-components";
import { Section, SectionRow } from "../../../common";

export const StyledSection = styled(Section)`
  color: var(--accent-contrast-color-1);
  background-color: var(--accent-color-1);
  height: var(--landing-page-download-section-height);
`;

const StyledSectionRow = styled(SectionRow)`
  flex: 1;
  padding-bottom: 3em;
  p {
    text-align: center;
  }
`;

export const StyledSectionRowMacOS = styled(StyledSectionRow)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledSectionRowiOS = styled(StyledSectionRow)`
  @media (min-width: 768px) {
    display: none;
  }
`;
