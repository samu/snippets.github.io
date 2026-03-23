import { ReactNode } from "react";
import { sendAnalytics } from "../../sendAnalytics";
import styles from "./styles.module.css";

type Props = {
  href: string;
  children: ReactNode;
  os: string;
  disabled?: boolean;
};

export function DownloadButton(props: Props) {
  return (
    <a
      href={props.href}
      className={`${styles.anchor} ${props.disabled ? styles.disabled : ""}`}
      onClick={() =>
        sendAnalytics({ type: "download", metadata: { os: props.os } })
      }
    >
      <span className={styles.downloadIcon}>{props.children}</span>
    </a>
  );
}
