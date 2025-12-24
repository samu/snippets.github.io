import styled from "styled-components";
import { Section, SectionRow } from "../../../common";

export const StyledSection = styled(Section)`
  color: var(--accent-contrast-color-1);
  background-color: var(--accent-color-1);
  padding-bottom: 2em;
`;

const StyledSectionRow = styled(SectionRow)`
  padding-bottom: 3em;
  align-items: flex-start;
  p {
    text-align: center;
  }
`;

export const StyledColumnRow = styled(StyledSectionRow)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledColumnRowiOS = styled(StyledSectionRow)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;
  min-width: 12.5em;
`;
