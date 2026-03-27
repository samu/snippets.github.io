import { Section } from "../common";
import { ShieldLockIcon } from "../Section30SyncWithGitHub/components/ShieldLockIcon";
import styles from "./styles.module.css";

export function Section31Encryption() {
  return (
    <Section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>Absolute and unconditional Privacy</div>

        <h2 className={styles.title}>
          <ShieldLockIcon></ShieldLockIcon>
          End-to-end encryption
        </h2>

        <p className={styles.body}>
          Keep your data private even when it leaves your device. With
          end-to-end encryption, your notes are encrypted before syncing and can
          only be decrypted with your own secret.
        </p>

        <div className={styles.points}>
          <div>Encrypted before upload</div>
          <div>Only you hold the key</div>
          <div>The target server never sees your data</div>
        </div>
      </div>
    </Section>
  );
}
