import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  src?: string;
  alt?: string;
  caption?: React.ReactNode;
  width?: string;
  maxWidth?: string;
  className?: string;
  // TODO needed?
  children?: ReactNode;
  imageStyle?: CSSProperties;
  padding?: string;
  marginBottom?: string;
  flex?: number;
  variant?: "light" | "dark" | "theme";
  scaleABit?: boolean;
};

export default function Figure(props: Props) {
  // TODO clean up
  const variant = props.variant ?? "theme";
  const isThemedSrc = props.src ? !/\.[^/]+$/.test(props.src) : false;
  const lightSrc = isThemedSrc ? `${props.src}/light.png` : props.src;
  const darkSrc = isThemedSrc ? `${props.src}/dark.png` : props.src;
  const imageSrc = variant === "dark" ? darkSrc : lightSrc;

  return (
    <figure
      className={clsx(styles.figure, props.className)}
      style={{
        width: props.width,
        maxWidth: props.maxWidth,
        marginBottom: props.marginBottom,
        flex: props.flex,
      }}
    >
      <div style={{ padding: props.padding }} className={styles.childWrapper}>
        {props.src ? (
          <picture>
            {variant === "theme" && isThemedSrc && (
              <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
            )}
            <img
              src={imageSrc}
              alt={props.alt ?? ""}
              style={props.imageStyle}
              className={clsx(props.scaleABit && styles.scaleABit)}
            />
          </picture>
        ) : (
          props.children
        )}
      </div>

      {props.caption && (
        <figcaption className="caption">{props.caption}</figcaption>
      )}
    </figure>
  );
}
