import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { ImageWrapper, Section } from "../common";
import { HeadersScribble } from "./components/HeadersScribble";
import { SubHeaderScribble } from "./components/SubHeaderScribble";
import styles from "./styles.module.css";

export function Section21Dashboards() {
  return (
    <Section className={styles.section}>
      <h1>
        <span>Task Management</span> <HeadersScribble></HeadersScribble>
      </h1>

      <h2>
        <span>Seamlessly integrated.</span>
        <SubHeaderScribble></SubHeaderScribble>
      </h2>

      <p>
        With its modular design, Snippets closes the gap between task management
        and note taking perfectly. Build custom dashboards with task lists and
        organize them exactly the way you want. Use due dates, priorities, and
        anything else that fits your workflow to make task management truly
        yours.
      </p>

      <ImageWrapper className={styles.imageWrapper} boxShadow={true}>
        <ThemeImage
          lightSrc={require("@site/static/media/tasks-light.png").default}
          darkSrc={require("@site/static/media/tasks-dark.png").default}
          alt="Snippets Tasks"
        />
      </ImageWrapper>

      <h2 className={styles.quickAddHeading}>
        <span>Capture quickly.</span>
        <SubHeaderScribble></SubHeaderScribble>
      </h2>

      <p>
        Quick-Add helps you grab tasks the second they come to mind. Type in
        plain language, use aliases, and turn quick thoughts into structured
        tasks.
      </p>

      <ImageWrapper className={styles.quickAddImageWrapper} boxShadow={true}>
        <ThemeImage
          lightSrc={require("@site/static/media/quick-add-light.png").default}
          darkSrc={require("@site/static/media/quick-add-dark.png").default}
          alt="Snippets Tasks"
        />
      </ImageWrapper>
    </Section>
  );
}
