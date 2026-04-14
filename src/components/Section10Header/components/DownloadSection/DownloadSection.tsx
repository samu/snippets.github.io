import { ComingSoonBadge } from "@site/src/common/components/ComingSoonBadge/ComingSoonBadge";
import { AndroidIcon } from "@site/src/common/components/DownloadButton/AndroidIcon";
import { DownloadButton } from "@site/src/common/components/DownloadButton/DownloadButton";
import { LinuxIcon } from "@site/src/common/components/DownloadButton/LinuxIcon";
import { WindowsIcon } from "@site/src/common/components/DownloadButton/WindowsIcon";
import { getReleaseAssetUrl } from "@site/src/common/releases";
import { MacOsIcon } from "../../../../common/components/DownloadButton/MacOsIcon";
import { Section, SectionRow } from "../../../common";
import styles from "./styles.module.css";

export function DownloadSection() {
  return (
    <Section className={styles.section}>
      <SectionRow className={styles.columnRow}>
        <div className={styles.column}>
          <p>macOS</p>

          <DownloadButton href={getReleaseAssetUrl("-arm64.dmg")} os="macOS">
            <MacOsIcon></MacOsIcon> Silicon (M1, M2, etc)
          </DownloadButton>

          <DownloadButton href={getReleaseAssetUrl("-x64.dmg")} os="macOS">
            <MacOsIcon></MacOsIcon> Intel (older)
          </DownloadButton>
        </div>

        <div className={styles.column}>
          <p>Windows</p>

          <DownloadButton href={getReleaseAssetUrl(".Setup.exe")} os="windows">
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

        <div className={styles.column}>
          <p>Android (Beta)</p>

          <DownloadButton href={getReleaseAssetUrl(".apk")} os="android">
            <AndroidIcon></AndroidIcon>
            APK
          </DownloadButton>
        </div>
      </SectionRow>
    </Section>
  );
}
