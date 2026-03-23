import { IllustrationFrame } from "@site/src/common/components/IllustrationFrame/IllustrationFrame";
import { SlideIn } from "@site/src/common/components/SlideIn/SlideIn";
import { ThemeImage } from "@site/src/common/components/ThemeImage/ThemeImage";
import { ImageWrapper, Section, SectionRow } from "../common";
import styles from "./styles.module.css";

export function Section50Plugins() {
  return (
    <Section className={styles.section}>
      <SectionRow flexDirection="column">
        <h2>Spaced Repetition With Flashcards</h2>

        <SectionRow className={styles.headingParagraphsSectionRow}>
          <p>
            Snippets is all about taking notes. In Snippets, a "Note" is in fact
            called a "Snippet" (hence the name "Snippets"). A Snippet is a piece
            of data that can be represented in a graphical user interface.
          </p>

          <p>
            When taking notes, you will be using the Rich Text Snippet. It
            represents some text on which you can apply formatting such as
            titles, sub-titles, quotes, code blocks, bold and italic text, etc.
          </p>

          <p>
            In the following section, you will learn about another Snippet type,
            the Flashcard Snippet, which is very similar to a Rich Text Snippet,
            but comes with additional functionality, allowing you to use
            Snippets as a spaced repetition app.
          </p>
        </SectionRow>
      </SectionRow>

      <SectionRow flexDirection="column">
        <div className={styles.textAndImageRow}>
          <SlideIn type="from-left">
            <div className={styles.textWithTitleBox}>
              <h3>Flashcard Snippet</h3>
              <p>
                Conceptually, a flashcard snippet is identical to a real world
                flash card: It has two sides, where one side is a question or
                prompt, and the other side is an answer or information. For
                example, this can be used for learning a new language.
              </p>
            </div>
          </SlideIn>

          <SlideIn type="from-right">
            <IllustrationFrame width="30em" position="at-the-bottom">
              <ImageWrapper>
                <ThemeImage
                  lightSrc={
                    require("@site/static/media/single-flashcard-light.png")
                      .default
                  }
                  darkSrc={
                    require("@site/static/media/single-flashcard-dark.png")
                      .default
                  }
                  alt="Snippets flashcard snippet"
                />
              </ImageWrapper>
            </IllustrationFrame>
          </SlideIn>
        </div>

        <div className={styles.textAndImageRow}>
          <SlideIn type="from-left">
            <div className={styles.textWithTitleBox}>
              <h3>Dashboard</h3>
              <p>
                The Dashboard gives an overview of all the flashcards in this
                folder. It shows your learning progress over time and lists all
                flashcards ordered by relevance. The relevance of a card is
                calculated through a scoring algorithm.
              </p>
            </div>
          </SlideIn>

          <SlideIn type="from-right">
            <IllustrationFrame width="35em" position="on-the-right">
              <ImageWrapper>
                <ThemeImage
                  lightSrc={
                    require("@site/static/media/flashcard-deck-light.png")
                      .default
                  }
                  darkSrc={
                    require("@site/static/media/flashcard-deck-dark.png")
                      .default
                  }
                  alt="Snippets flashcard dashboard"
                />
              </ImageWrapper>
            </IllustrationFrame>
          </SlideIn>
        </div>

        <div className={styles.textAndImageRow}>
          <SlideIn type="from-left">
            <div className={styles.textWithTitleBox}>
              <h3>Session Wizard</h3>
              <p>
                Flashcards can be practiced in an interactive mode. When
                stepping through the flashcards, a rating can be provided, which
                will re-prioritize the flashcards in the next session.
              </p>
            </div>
          </SlideIn>

          <SlideIn type="from-right">
            <IllustrationFrame width="25em" position="at-the-bottom">
              <ImageWrapper>
                <ThemeImage
                  lightSrc={
                    require("@site/static/media/flashcard-session-light.png")
                      .default
                  }
                  darkSrc={
                    require("@site/static/media/flashcard-session-dark.png")
                      .default
                  }
                  alt="Snippets flashcard session"
                />
              </ImageWrapper>
            </IllustrationFrame>
          </SlideIn>
        </div>
      </SectionRow>
    </Section>
  );
}
