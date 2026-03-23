import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "from-top" | "from-bottom" | "from-left" | "from-right";
  animationDuration?: number;
  animationDelay?: number;
};

export function SlideIn(props: Props) {
  return props.children;
}
