import styles from "./styles.module.css";

type Props = {
  label?: string;
  className?: string;
};

export function ComingSoonBadge({
  label = "Coming Soon",
  className,
}: Props) {
  return (
    <div className={[styles.outer, className].filter(Boolean).join(" ")}>
      {label}
    </div>
  );
}
