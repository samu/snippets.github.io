import { ComingSoonBadge } from "@site/src/common/components/ComingSoonBadge/ComingSoonBadge";
import { DownloadButton } from "@site/src/common/components/DownloadButton/DownloadButton";
import { LinuxIcon } from "@site/src/common/components/DownloadButton/LinuxIcon";
import { WindowsIcon } from "@site/src/common/components/DownloadButton/WindowsIcon";
import { MacOsIcon } from "../../../../common/components/DownloadButton/MacOsIcon";
import { Section, SectionRow } from "../../../common";
import styles from "./styles.module.css";

export function DownloadSection() {
  return (
    <Section className={styles.section}>
      <SectionRow className={styles.columnRow}>
        <div className={styles.column}>
          <p>macOS</p>

          <DownloadButton
            href="https://github.com/samu/snippets/releases/download/v0.18.0/Snippets-0.18.0-arm64.dmg"
            os="macOS"
          >
            <MacOsIcon></MacOsIcon> Silicon (M1, M2, etc)
          </DownloadButton>

          <DownloadButton
            href="https://github.com/samu/snippets/releases/download/v0.18.0/Snippets-0.18.0-x64.dmg"
            os="macOS"
          >
            <MacOsIcon></MacOsIcon> Intel (older)
          </DownloadButton>
        </div>

        <div className={styles.column}>
          <p>Windows</p>

          <DownloadButton
            href="https://github.com/samu/snippets/releases/download/v0.18.0/Snippets-0.18.0.Setup.exe"
            os="windows"
          >
            <WindowsIcon></WindowsIcon> Windows
          </DownloadButton>
        </div>

        <div className={styles.column}>
          <p>Linux</p>

          <DownloadButton href="" disabled={true} os="linux">
            <LinuxIcon></LinuxIcon> Linux
            <ComingSoonBadge></ComingSoonBadge>
          </DownloadButton>
        </div>
      </SectionRow>

      <SectionRow className={styles.columnRowIos}>
        <div className={styles.column}>
          <p>iOS Beta</p>

          <DownloadButton
            href="https://testflight.apple.com/join/3wpgBj2Z"
            os="iOS"
          >
            <MacOsIcon></MacOsIcon>
            TestFlight
          </DownloadButton>
        </div>
      </SectionRow>
    </Section>
  );
}
