import styled from "styled-components";

export const StyledAnchor = styled.a<{
  $disabled?: boolean;
}>`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: var(--oc-blue-8);
  border: 1px solid var(--oc-blue-9);
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  ${(props) => (props.$disabled ? "pointer-events: none;" : "")}
`;

export const StyledDownloadIcon = styled.span`
  display: flex;
  color: var(--accent-contrast-color-1);
  align-items: center;
  justify-content: center;
  padding: 0.5em;

  svg {
    width: 1em;
    margin-right: 0.25em;
  }
`;
