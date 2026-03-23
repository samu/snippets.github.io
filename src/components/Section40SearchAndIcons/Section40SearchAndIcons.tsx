import { IllustrationFrame } from "@site/src/common/components/IllustrationFrame/IllustrationFrame";
import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { IconWrapper, ImageWrapper, Section, SectionRow } from "../common";
import { EmojiHeartIcon } from "./components/EmojiHeartIcon";
import { SearchIcon } from "./components/SearchIcon";
import styles from "./styles.module.css";

export function Section40SearchAndIcons() {
  return (
    <Section className={styles.section}>
      <div className={styles.topRibbon}></div>
      <div className={styles.bottomRibbon}></div>

      <h1>Find and Organize</h1>

      <SectionRow className={styles.sectionRow}>
        <div className={styles.textBox}>
          <h2>
            <IconWrapper>
              <SearchIcon></SearchIcon>
            </IconWrapper>
          </h2>

          <h2>Search</h2>

          <p>
            Snippets offers fast and efficient search functionality, delivering
            well-formatted results that provide clear and concise previews of
            the content.
          </p>
        </div>

        <IllustrationFrame
          className={styles.illustrationFrame}
          position="on-the-right"
        >
          <ImageWrapper>
            <ThemeImage
              lightSrc={require("@site/static/media/search-light.png").default}
              darkSrc={require("@site/static/media/search-dark.png").default}
              alt="Snippets search"
            />
          </ImageWrapper>
        </IllustrationFrame>
      </SectionRow>

      <div className={styles.rowSpacer}></div>

      <SectionRow
        className={`${styles.sectionRow} ${styles.sectionRowReverse}`}
      >
        <div className={styles.textBox}>
          <h2>
            <IconWrapper>
              <EmojiHeartIcon></EmojiHeartIcon>
            </IconWrapper>
          </h2>

          <h2>Icons</h2>

          <p>
            Snippets includes a collection of icons that enhance the structure
            of your notes, adding both clarity and visual appeal.
          </p>
        </div>

        <IllustrationFrame
          className={styles.illustrationFrame}
          position="on-the-left"
        >
          <ImageWrapper>
            <ThemeImage
              lightSrc={require("@site/static/media/icons-light.png").default}
              darkSrc={require("@site/static/media/icons-dark.png").default}
              alt="Snippets icons"
            />
          </ImageWrapper>
        </IllustrationFrame>
      </SectionRow>
    </Section>
  );
}
