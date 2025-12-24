import { ReactNode } from "react";
import { InnerWrapper, OuterWrapper, Position } from "./styled";

type Props = {
  position: Position;
  width?: string;
  className?: string;
  children: ReactNode;
};

export function IllustrationFrame(props: Props) {
  return (
    <OuterWrapper $width={props.width} className={props.className}>
      <InnerWrapper $position={props.position}>{props.children}</InnerWrapper>
    </OuterWrapper>
  );
}
