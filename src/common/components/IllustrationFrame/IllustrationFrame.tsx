import { ReactNode } from "react";
import styles from "./styles.module.css";

export type Position =
  | "on-the-right"
  | "on-the-left"
  | "at-the-bottom"
  | "centered";

type Props = {
  position: Position;
  width?: string;
  className?: string;
  children: ReactNode;
};

export function IllustrationFrame(props: Props) {
  const positionClass = {
    "on-the-right": styles.onTheRight,
    "on-the-left": styles.onTheLeft,
    "at-the-bottom": styles.atTheBottom,
    centered: styles.centered,
  }[props.position];

  return (
    <div
      className={`${styles.outerWrapper} ${props.className ?? ""}`}
      style={{ width: props.width ?? "none" }}
    >
      <div className={`${styles.innerWrapper} ${positionClass}`}>
        {props.children}
      </div>
    </div>
  );
}
