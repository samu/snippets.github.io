import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
  width?: string;
  className?: string;
  children: ReactNode;
  padding?: string;
  marginBottom?: string;
};

export default function Figure(props: Props) {
  return (
    <figure
      className={clsx(styles.figure, props.className)}
      style={{ width: props.width, marginBottom: props.marginBottom }}
    >
      <div style={{ padding: props.padding }} className={styles.childWrapper}>
        {props.children}
      </div>

      {props.caption && (
        <figcaption className={styles.caption}>{props.caption}</figcaption>
      )}
    </figure>
  );
}
