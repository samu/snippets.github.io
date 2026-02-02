import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

export default function Row(props: Props) {
  return <div className={styles.row}>{props.children}</div>;
}
