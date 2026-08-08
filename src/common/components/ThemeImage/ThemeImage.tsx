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
  const src = variant === "dark" ? darkSrc : lightSrc;

  return (
    <picture className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      {variant === "theme" && (
        <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
      )}
      <img src={src} alt={alt} />
    </picture>
  );
}
