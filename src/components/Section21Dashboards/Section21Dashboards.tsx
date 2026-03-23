import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { ImageWrapper, Section } from "../common";
import { HeadersScribble } from "./components/HeadersScribble";
import { SubHeaderScribble } from "./components/SubHeaderScribble";
import styles from "./styles.module.css";

export function Section21Dashboards() {
  return (
    <Section className={styles.section}>
      <h1>
        <span>Dashboards</span> <HeadersScribble></HeadersScribble>
      </h1>

      <h2>
        <span>Everything in one place.</span>
        <SubHeaderScribble></SubHeaderScribble>
      </h2>

      <p>
        Put notes and tables alongside each other to keep related information
        together. Snippets gives you a flexible workspace where ideas live side
        by side and are easy to find through visual structure.
      </p>

      <ImageWrapper className={styles.imageWrapper} boxShadow={true}>
        <ThemeImage
          lightSrc={require("@site/static/media/dashboard-light.png").default}
          darkSrc={require("@site/static/media/dashboard-dark.png").default}
          alt="Snippets dashboard"
        />
      </ImageWrapper>
    </Section>
  );
}
