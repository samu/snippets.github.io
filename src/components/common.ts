import styled, { css } from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  background-color: var(--background-color-1);
`;

export const SectionRow = styled.div<{
  $flexDirection?: "row" | "column";
  $isInView?: boolean;
}>`
  transition: margin-top 0.33s, opacity 0.33s;
  margin-top: ${(props) =>
    props.$isInView === undefined ? "0" : props.$isInView ? "" : "10em"};

  opacity: ${(props) =>
    props.$isInView === undefined ? "1" : props.$isInView ? "1" : "0"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.$flexDirection ?? "row"};
  width: 100%;
`;

export const StrongBoxShadow = css`
  box-shadow: 0 10px 30px rgba(var(--box-shadow-base-color), 0.5);
`;

export const ImageWrapper = styled.div<{ $boxShadow?: boolean }>`
  display: flex;
  border-radius: 1em;
  overflow: hidden;
  ${(props) => props.$boxShadow && StrongBoxShadow}
  img {
    width: 100%;
    align-self: center; // Hack for Safari: keep aspect ratio of image
  }
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
  svg {
    height: 100%;
    width: 100%;
  }
`;
