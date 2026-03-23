import { DownloadButton } from "@site/src/common/components/DownloadButton/DownloadButton";
import { MacOsIcon } from "@site/src/common/components/DownloadButton/MacOsIcon";
import { SlideIn } from "@site/src/common/components/SlideIn/SlideIn";
import { IPhoneX } from "@site/src/common/components/IPhoneX/IPhoneX";
import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { Section, SectionRow } from "../common";
import styles from "./styles.module.css";

export function Section60Mobile() {
  return (
    <Section className={styles.section}>
      <SectionRow flexDirection="column">
        <h1>Available on Mobile</h1>

        <SlideIn>
          <IPhoneX className={styles.iPhoneX}>
            <ThemeImage
              lightSrc={require("@site/static/media/mobile-editor-light.png").default}
              darkSrc={require("@site/static/media/mobile-editor-dark.png").default}
              alt="Snippets mobile editor"
            />
          </IPhoneX>
        </SlideIn>
      </SectionRow>

      <SectionRow className={styles.bottomRow} flexDirection="column">
        <p>Beta available on iOS. Coming soon on all other platforms.</p>

        <DownloadButton
          href="https://testflight.apple.com/join/3wpgBj2Z"
          os="iOS"
        >
          <MacOsIcon></MacOsIcon>
          TestFlight
        </DownloadButton>
      </SectionRow>
    </Section>
  );
}
