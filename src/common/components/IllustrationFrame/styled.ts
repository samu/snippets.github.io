import styled, { css } from "styled-components";

export const OuterWrapper = styled.div<{
  $width?: string;
}>`
  width: ${(props) => (props.$width ? props.$width : "none")};
  max-width: calc(100% - 2em);
  border-radius: 2em;
  overflow: hidden;
  background-color: var(--accent-color-1);
  border: 1px solid var(--border-color-1);
`;

export type Position =
  | "on-the-right"
  | "on-the-left"
  | "at-the-bottom"
  | "centered";

const onTheRight = css`
  transform: scale(0.95) translateX(-1em) translateY(1em);
  transform-origin: bottom left;
`;

const onTheLeft = css`
  transform: scale(0.95) translateX(0.5em) translateY(1em);
  transform-origin: bottom right;
`;

const atTheBottom = css`
  transform: translateY(1.5em);
  margin-left: 2em;
  margin-right: 2em;
`;

const centered = css`
  margin: 1em;
`;

function renderCssForStyledImageWrapper(position: Position) {
  switch (position) {
    case "on-the-right": {
      return onTheRight;
    }
    case "on-the-left": {
      return onTheLeft;
    }
    case "at-the-bottom": {
      return atTheBottom;
    }
    case "centered": {
      return centered;
    }
  }
}

export const InnerWrapper = styled.div<{
  $position: Position;
}>`
  ${(props) => renderCssForStyledImageWrapper(props.$position)}
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 0.75));
`;
