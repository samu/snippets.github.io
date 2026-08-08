import { IPhoneX } from "@site/src/common/components/IPhoneX/IPhoneX";
import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { ImageWrapper, Section } from "../common";
import { Fragment } from "react";
import { DownloadSection } from "./components/DownloadSection/DownloadSection";
import { FeatherIcon } from "./components/FeatherIcon";
import { Scribble } from "./components/Scribble";
import styles from "./styles.module.css";

export function Section10Header() {
  return (
    <Fragment>
      <Section className={styles.section}>
        <header className={styles.header}>
          <h1>
            Note-Taking That &nbsp;
            <em>
              <span className={styles.textWrap}>
                <span aria-hidden="true">&nbsp;</span>
                <Scribble className={styles.scribble} variation={1}></Scribble>
                <FeatherIcon className={styles.featherIcon}></FeatherIcon>
                <span className={styles.text}>Grows With You</span>
              </span>
            </em>
          </h1>
        </header>

        <div className={styles.imageWrapperContainer}>
          <ImageWrapper className={styles.desktopImageWrapper} boxShadow={true}>
            <ThemeImage src="general-todos" alt="Snippets general todos" />
          </ImageWrapper>

          <IPhoneX className={styles.iPhoneX}>
            <ThemeImage src="mobile-editor" alt="Snippets mobile editor" />
          </IPhoneX>
        </div>
      </Section>

      <DownloadSection></DownloadSection>
    </Fragment>
  );
}
