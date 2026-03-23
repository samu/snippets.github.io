import styles from "./styles.module.css";

type Props = {
  lightSrc: string;
  darkSrc: string;
  alt?: string;
  className?: string;
};

export function ThemeImage({ lightSrc, darkSrc, alt = "", className }: Props) {
  return (
    <span className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <img className={styles.light} src={lightSrc} alt={alt} />
      <img className={styles.dark} src={darkSrc} alt={alt} />
    </span>
  );
}
