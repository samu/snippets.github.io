import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { ImageWrapper, Section } from "../common";
import styles from "./styles.module.css";

export function Section40Journaling() {
  return (
    <Section className={styles.section}>
      <div className={styles.topRibbon}></div>
      <div className={styles.bottomRibbon}></div>

      <div className={styles.content}>
        <h1>Journaling and Habit Tracking</h1>

        <p className={styles.description}>
          Build a daily practice around your notes. Capture journal entries,
          review progress over time, and keep habits visible in a calm,
          structured workspace.
        </p>

        <ImageWrapper className={styles.imageWrapper} boxShadow={true}>
          <ThemeImage
            lightSrc={require("@site/static/media/journal-light.png").default}
            darkSrc={require("@site/static/media/journal-dark.png").default}
            alt="Snippets journaling and habit tracking"
          />
        </ImageWrapper>
      </div>
    </Section>
  );
}
