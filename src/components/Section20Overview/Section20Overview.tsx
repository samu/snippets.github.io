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
              Bring everything into one cohesive place and organize it your way.
            </span>

            {false && <Checked></Checked>}
          </p>
        </div>
      </div>

      <SectionRow className={styles.sectionRow}>
        <div className={`${styles.textBox} ${styles.simpleTextBox}`}>
          <HeartIcon></HeartIcon>

          <h1>Beautiful Rich Text</h1>

          <p>
            Everything starts with text. Snippets gives it the attention it
            deserves — with a rich-text editor that stays out of your way and
            simply works. No clumsy block-based layouts, no awkward editors, no
            jumpy markdown quirks.{" "}
            <span
              className={`${styles.highlightWord} ${styles.simpleHighlight} ${styles.inlinePunch}`}
            >
              Our rich text editor is truly special - we think you'll love it.
            </span>
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
        <div
          className={`${styles.textBox} ${styles.textBoxReversed} ${styles.powerfulTextBox}`}
        >
          <CollectionIcon></CollectionIcon>

          <h1>Collections</h1>

          <p>
            Use collections to group your notes. Collections come in many
            shapes: folders, lists, tables and timelines.
            <span
              className={`${styles.highlightWord} ${styles.powerfulHighlight} ${styles.inlinePunch}`}
            >
              Combined with our unique attributes concept, you'll be able to
              organize your content like nowhere else.
            </span>
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
        <div className={`${styles.textBox} ${styles.affordableTextBox}`}>
          <DashboardIcon></DashboardIcon>

          <h1>Dashboards</h1>

          <p>
            Work rarely happens in isolation. Dashboards let you place related
            content side by side and organize it in a way that makes sense at a
            glance. Note-taking is a lot about context switching and spatial
            recognition.{" "}
            <span
              className={`${styles.highlightWord} ${styles.affordableHighlight} ${styles.inlinePunch}`}
            >
              Dashboards give you a new way to work with your content — bringing
              context together in one place.
            </span>
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
