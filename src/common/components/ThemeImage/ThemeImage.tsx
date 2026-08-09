import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  variant?: "light" | "dark" | "theme";
};

export function ThemeImage({
  src,
  alt = "",
  className,
  variant = "theme",
}: Props) {
  const imagePath = `/media/landing-page/${src}`;
  const lightSrc = `${imagePath}/light.png`;
  const darkSrc = `${imagePath}/dark.png`;
  const imageSrc = variant === "dark" ? darkSrc : lightSrc;

  return (
    <picture className={clsx([styles.wrapper, className])}>
      {variant === "theme" && (
        <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
      )}
      <img src={imageSrc} alt={alt} />
    </picture>
  );
}
