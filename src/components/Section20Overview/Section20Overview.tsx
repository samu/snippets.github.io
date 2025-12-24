import { IllustrationFrame } from "@site/src/common/components/IllustrationFrame/IllustrationFrame";
import { Checked } from "./components/Checked";
import { Crossed } from "./components/Crossed";
import { HeaderScribble } from "./components/HeaderScribble";
import { ImageIcon } from "./components/ImageIcon";
import { NoMarkdownScribble } from "./components/NoMarkdownScribble";
import { SubHeaderScribble } from "./components/SubHeaderScribble";
import { TodoIcon } from "./components/TodoIcon";
import { UnlockIcon } from "./components/UnlockIcon";
import {
  DoneRight,
  IntroRow,
  NotMarkdownRow,
  StyledHeader,
  StyledImageWrapper,
  StyledSection,
  StyledSectionRow,
  StyledSectionRowReverse,
  StyledTextBox,
  StyledTextBoxReversed,
} from "./styled";

export function Section20Overview() {
  return (
    <StyledSection>
      <StyledHeader>
        <h1>
          Rich text editing{" "}
          <DoneRight>
            <HeaderScribble></HeaderScribble>
            <span>done right</span>
          </DoneRight>
        </h1>

        <h2>
          <span>Writing should feel fluid, focused, and effortless.</span>
          <SubHeaderScribble></SubHeaderScribble>
        </h2>

        <IntroRow>
          <p>
            <span>
              Forget clumsy block-based note apps, poorly designed rich-text
              editors, and the chaotic, jumpy feel of markdown-first tools.
            </span>
            {false && <Crossed></Crossed>}
          </p>

          <p>
            <span>
              Snippets features a carefully crafted rich-text editor that
              delivers a calm and genuinely pleasant writing experience.
            </span>

            {false && <Checked></Checked>}
          </p>
        </IntroRow>

        <ul>
          <li>
            <strong>Use of markdown syntax</strong>: Use markdown-like syntax to
            create formattings. For example, type <strong>#</strong> followed by{" "}
            <i>Space</i> to create a heading.
          </li>
          <li>
            <strong>Easy creation and destruction of formattings</strong>: Use{" "}
            <i>Space</i> for creation and <i>Backspace</i> for destruction. For
            example, place your cursor at the beginning of a heading and press{" "}
            <i>Backspace</i> to destroy the formatting. Hit <i>Space</i> to
            recreate it.
          </li>
          <li>
            <strong>Jumping in and out of formattings</strong>: Jump in and out
            of formattings with <i>ArrowLeft</i> and <i>ArrowRight</i>. For
            example, place your cursor in front of bold formatting, press{" "}
            <i>ArrowLeft</i> to enter the bold formatting, then continue writing
            in bold. Escape the formatting by pressing <i>ArrowRight</i>.
          </li>
          <li>
            <strong>Drag and drop</strong>: Double-click at the end of a
            paragraph or list item to select the node. Drag and drop the
            selection to any other place within the document.
          </li>
        </ul>
      </StyledHeader>

      <StyledSectionRow>
        <StyledTextBox>
          <UnlockIcon></UnlockIcon>

          <h1>No Constraints</h1>

          <p>
            Easily create and work with complex rich-text structures - such as
            nested blocks, embedded elements, references, and mixed content -
            without fighting the editor. Content stays structured, predictable,
            and easy to extend, even as documents grow in size and complexity.
          </p>
        </StyledTextBox>

        <IllustrationFrame position="on-the-right">
          <StyledImageWrapper>
            <img src={require("@site/static/img/friday.png").default} />
          </StyledImageWrapper>
        </IllustrationFrame>
      </StyledSectionRow>

      <StyledSectionRowReverse>
        <StyledTextBoxReversed>
          <TodoIcon></TodoIcon>

          <h1>Todo Lists</h1>

          <p>
            Create and manage todos in a simple, structured way. Organize tasks,
            mark progress, and keep your work visible without unnecessary
            complexity.
          </p>
        </StyledTextBoxReversed>

        <IllustrationFrame position="on-the-left">
          <StyledImageWrapper>
            <img src={require("@site/static/img/todos.png").default} />
          </StyledImageWrapper>
        </IllustrationFrame>
      </StyledSectionRowReverse>

      <StyledSectionRow>
        <StyledTextBox>
          <ImageIcon></ImageIcon>

          <h1>Images</h1>

          <p>
            Copy-paste or drag images. Make it look nice with the panorama mode.
            Resize to a preferred size, or let it take the full width.
          </p>
        </StyledTextBox>

        <IllustrationFrame position="on-the-right">
          <StyledImageWrapper>
            <img src={require("@site/static/img/images.png").default} />
          </StyledImageWrapper>
        </IllustrationFrame>
      </StyledSectionRow>

      <NotMarkdownRow $flexDirection="column">
        <h1>
          Purposely{" "}
          <span>
            <NoMarkdownScribble></NoMarkdownScribble> <span>not</span>
          </span>{" "}
          Markdown-Based
        </h1>

        <p>
          Snippets is intentionally not based on Markdown. Markdown works well
          for technical documentation and collaborative workflows where content
          lives in version control. For note-taking, it quickly becomes a
          constraint.
        </p>

        <p>
          By moving beyond Markdown, Snippets can rely on rich, structured data
          instead of plain text files. This enables far more expressive content
          and supports a wide range of use cases without forcing everything into
          a text-only format. Concerns about vendor lock-in are addressed
          through a simple export-to-Markdown option.
        </p>
      </NotMarkdownRow>
    </StyledSection>
  );
}
