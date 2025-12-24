import styled from "styled-components";
import { Section, SectionRow } from "../common";

export const StyledSection = styled(Section)`
  filter: drop-shadow(1px 15px 20px rgba(var(--box-shadow-base-color), 0.9));
  z-index: 1;

  @media (max-width: 768px) {
    /* Because the mobile section is hidden on more narrow devices, we have to change the shadow here */
    filter: drop-shadow(1px 15px 20px rgba(0, 0, 0, 0.9));
  }

  h2 {
    text-align: center;
    font-size: 3em;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  --section-width: 60em;

  transform: translateZ(0); // fix flickering shadow on safari
`;

export const HeadingParagraphsSectionRow = styled(SectionRow)`
  flex-direction: column;
  padding-bottom: 2em;

  p {
    max-width: calc(100% - 2em);
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: var(--section-width);

    p {
      max-width: calc(100% / 3 - 1em);
    }
  }
`;

export const TextAndImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    width: var(--section-width);
  }
`;

export const TextWithTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;

    p {
      padding-right: 3em;
    }
  }

  max-width: calc(100% - 2em);
`;
