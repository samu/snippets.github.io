import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styles from "./common.module.css";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

type SectionRowProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  flexDirection?: "row" | "column";
  isInView?: boolean;
};

type ImageWrapperProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  boxShadow?: boolean;
};

type IconWrapperProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={[styles.section, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionRow({
  className,
  children,
  flexDirection,
  isInView,
  style,
  ...props
}: SectionRowProps) {
  const rowStyle: CSSProperties = {
    ...style,
    ...(flexDirection ? { ["--section-row-direction" as string]: flexDirection } : {}),
  };

  return (
    <div
      className={[
        styles.sectionRow,
        isInView === false ? styles.sectionRowHidden : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={rowStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export function ImageWrapper({
  className,
  children,
  boxShadow,
  ...props
}: ImageWrapperProps) {
  return (
    <div
      className={[
        styles.imageWrapper,
        boxShadow ? styles.strongBoxShadow : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export function IconWrapper({
  className,
  children,
  ...props
}: IconWrapperProps) {
  return (
    <span
      className={[styles.iconWrapper, className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
