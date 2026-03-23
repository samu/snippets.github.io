import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  className?: string;
  children: ReactNode;
};

export function IPhoneX(props: Props) {
  return (
    <div className={[styles.shadowContainer, props.className].filter(Boolean).join(" ")}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          {props.children}
          <div className={styles.notch}></div>
          <div className={styles.bottomSlider}></div>
        </div>

        <div className={styles.silentModeButton}></div>
        <div className={styles.volumeButtonTop}></div>
        <div className={styles.volumeButtonBottom}></div>
        <div className={styles.lockButton}></div>
      </div>
    </div>
  );
}
