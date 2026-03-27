import { IllustrationFrame } from "@site/src/common/components/IllustrationFrame/IllustrationFrame";
import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { ImageWrapper, Section, SectionRow } from "../common";
import { Checked } from "./components/Checked";
import { CollectionIcon } from "./components/CollectionIcon";
import { Crossed } from "./components/Crossed";
import { DashboardIcon } from "./components/DashboardIcon";
import { HeaderScribble } from "./components/HeaderScribble";
import { HeartIcon } from "./components/HeartIcon";
import { SubHeaderScribble } from "./components/SubHeaderScribble";
import styles from "./styles.module.css";

export function Section20Overview() {
  return (
    <Section className={styles.section}>
      <div className={styles.header}>
        <h1>
          One place for{" "}
          <span className={styles.doneRight}>
            <HeaderScribble></HeaderScribble>
            <span>everything</span>
          </span>
          .
        </h1>

        <h2>
          <span className={styles.highlightLine}>
            Starts{" "}
            <span
              className={`${styles.highlightWord} ${styles.simpleHighlight}`}
            >
              simple
            </span>
            . Becomes{" "}
            <span
              className={`${styles.highlightWord} ${styles.powerfulHighlight}`}
            >
              powerful
            </span>
            . Stays{" "}
            <span
              className={`${styles.highlightWord} ${styles.affordableHighlight}`}
            >
              affordable
            </span>
            .
          </span>
          {false && <SubHeaderScribble></SubHeaderScribble>}
        </h2>

        <div className={styles.introRow}>
          <p>
            <span>
              Forget the clutter of too many tools and the friction of
              disconnected systems.
            </span>
            {false && <Crossed></Crossed>}
          </p>

          <p>
            <span>
              Bring everything into one place and organize it your way.
            </span>

            {false && <Checked></Checked>}
          </p>
        </div>
      </div>

      <SectionRow className={styles.sectionRow}>
        <div className={styles.textBox}>
          <HeartIcon></HeartIcon>

          <h1>Beautiful Rich Text</h1>

          <p>
            Everything starts with text. Snippets gives it the attention it
            deserves — with a rich-text editor that feels natural and just
            works.
          </p>
        </div>

        <IllustrationFrame position="centered">
          <ImageWrapper className={styles.imageWrapper} boxShadow={true}>
            <ThemeImage
              lightSrc={require("@site/static/media/friday-light.png").default}
              darkSrc={require("@site/static/media/friday-dark.png").default}
              alt="Snippets rich text example"
            />
          </ImageWrapper>
        </IllustrationFrame>
      </SectionRow>

      <SectionRow
        className={`${styles.sectionRow} ${styles.sectionRowReverse}`}
      >
        <div className={`${styles.textBox} ${styles.textBoxReversed}`}>
          <CollectionIcon></CollectionIcon>

          <h1>Collections</h1>

          <p>
            Combine notes into static or dynamic collections — group them
            manually or let filters keep everything up to date.
          </p>
        </div>

        <IllustrationFrame position="centered">
          <ImageWrapper className={styles.imageWrapper} boxShadow={true}>
            <ThemeImage
              lightSrc={
                require("@site/static/media/collections-light.png").default
              }
              darkSrc={
                require("@site/static/media/collections-dark.png").default
              }
              alt="Snippets dashboards"
            />
          </ImageWrapper>
        </IllustrationFrame>
      </SectionRow>

      <SectionRow className={styles.sectionRow}>
        <div className={styles.textBox}>
          <DashboardIcon></DashboardIcon>

          <h1>Dashboards</h1>

          <p>
            Work rarely happens in isolation. Dashboards let you place related
            content side by side and organize it in a way that makes sense at a
            glance.
          </p>
        </div>

        <IllustrationFrame position="centered">
          <ImageWrapper className={styles.imageWrapper} boxShadow={true}>
            <ThemeImage
              lightSrc={
                require("@site/static/media/dashboard-light.png").default
              }
              darkSrc={require("@site/static/media/dashboard-dark.png").default}
              alt="Snippets dashboards"
            />
          </ImageWrapper>
        </IllustrationFrame>
      </SectionRow>
    </Section>
  );
}
