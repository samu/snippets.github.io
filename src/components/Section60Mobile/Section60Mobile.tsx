import { ComingSoonBadge } from "@site/src/common/components/ComingSoonBadge/ComingSoonBadge";
import { AndroidIcon } from "@site/src/common/components/DownloadButton/AndroidIcon";
import { DownloadButton } from "@site/src/common/components/DownloadButton/DownloadButton";
import { MacOsIcon } from "@site/src/common/components/DownloadButton/MacOsIcon";
import { IPhoneX } from "@site/src/common/components/IPhoneX/IPhoneX";
import { SlideIn } from "@site/src/common/components/SlideIn/SlideIn";
import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { getReleaseAssetUrl } from "@site/src/common/releases";
import { Section, SectionRow } from "../common";
import styles from "./styles.module.css";

export function Section60Mobile() {
  return (
    <Section className={styles.section}>
      <SectionRow flexDirection="column">
        <div className={styles.headingWrap}>
          <h1 className={styles.heading}>
            <span className={styles.headingText}>Available on Mobile</span>
            <ComingSoonBadge className={styles.headingBadge} label="Beta" />
          </h1>
        </div>

        <SlideIn>
          <IPhoneX className={styles.iPhoneX}>
            <ThemeImage
              lightSrc={
                require("@site/static/media/mobile-editor-light.png").default
              }
              darkSrc={
                require("@site/static/media/mobile-editor-dark.png").default
              }
              alt="Snippets mobile editor"
            />
          </IPhoneX>
        </SlideIn>
      </SectionRow>

      <SectionRow className={styles.columnRow}>
        <div className={styles.column}>
          <p>iOS (Beta)</p>

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

          <DownloadButton
            href={getReleaseAssetUrl(".apk")}
            os="android"
          >
            <AndroidIcon></AndroidIcon>
            APK
          </DownloadButton>
        </div>
      </SectionRow>
    </Section>
  );
}
