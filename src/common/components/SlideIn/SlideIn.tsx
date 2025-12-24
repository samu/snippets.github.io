import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import {
  FromBottomContainer,
  FromLeftContainer,
  FromRightContainer,
  FromTopContainer,
} from "./styled";

type Props = {
  children: ReactNode;
  type?: "from-top" | "from-bottom" | "from-left" | "from-right";
  animationDuration?: number;
  animationDelay?: number;
};

const defaultAniationDuration = 0.5;

export function SlideIn(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return props.children;

  // TODO disabled for now because of mobile weirdness

  switch (props.type) {
    case "from-top": {
      return (
        <FromTopContainer
          ref={ref}
          $isInView={isInView}
          $animationDuration={
            props.animationDuration ?? defaultAniationDuration
          }
          $animationDelay={props.animationDelay ?? 0}
        >
          {props.children}
        </FromTopContainer>
      );
    }
    case "from-left": {
      return (
        <FromLeftContainer
          ref={ref}
          $isInView={isInView}
          $animationDuration={
            props.animationDuration ?? defaultAniationDuration
          }
          $animationDelay={props.animationDelay ?? 0}
        >
          {props.children}
        </FromLeftContainer>
      );
    }
    case "from-right": {
      return (
        <FromRightContainer
          ref={ref}
          $isInView={isInView}
          $animationDuration={
            props.animationDuration ?? defaultAniationDuration
          }
          $animationDelay={props.animationDelay ?? 0}
        >
          {props.children}
        </FromRightContainer>
      );
    }
    default: {
      return (
        <div ref={ref}>
          <FromBottomContainer
            $isInView={isInView}
            $animationDuration={
              props.animationDuration ?? defaultAniationDuration
            }
            $animationDelay={props.animationDelay ?? 0}
          >
            {props.children}
          </FromBottomContainer>
        </div>
      );
    }
  }
}
