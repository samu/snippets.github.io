import styles from "./styles.module.css";

type Props = {
  lightSrc: string;
  darkSrc: string;
  alt?: string;
  className?: string;
  variant?: "light" | "dark" | "theme";
};

export function ThemeImage({
  lightSrc,
  darkSrc,
  alt = "",
  className,
  variant = "theme",
}: Props) {
  const shouldForceLight = variant === "light";
  const shouldForceDark = variant === "dark";

  return (
    <span className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <img
        className={[
          styles.light,
          shouldForceLight ? styles.forceVisible : "",
          shouldForceDark ? styles.forceHidden : "",
        ]
          .filter(Boolean)
          .join(" ")}
        src={lightSrc}
        alt={alt}
      />
      <img
        className={[
          styles.dark,
          shouldForceDark ? styles.forceVisible : "",
          shouldForceLight ? styles.forceHidden : "",
        ]
          .filter(Boolean)
          .join(" ")}
        src={darkSrc}
        alt={alt}
      />
    </span>
  );
}
