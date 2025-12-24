import styled from "styled-components";
import { Section, SectionRow } from "../common";

export const StyledSection = styled(Section)`
  min-height: 40em;

  h1 {
    font-size: 1.5em;
    margin: 0;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2em;
    }
  }

  p {
    margin: 0;
    margin-top: 1em;
    max-width: 22.5em;
    padding-left: 2em;
  }

  ul {
    margin: 0;
    margin-top: 1em;
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
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
