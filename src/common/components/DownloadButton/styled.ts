import styled from "styled-components";

export const StyledAnchor = styled.a`
  text-decoration: none;
`;

export const StyledDownloadIcon = styled.span`
  display: flex;
  border: 1px solid var(--accent-contrast-color-1);
  color: var(--accent-contrast-color-1);
  border-radius: 3em;
  width: 2.5em;
  height: 2.5em;
  align-items: center;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;

  @media (min-width: 768px) {
    width: 3em;
    height: 3em;
  }

  svg {
    height: 40%;
    width: 40%;
    margin: 0.5em;
  }
`;
