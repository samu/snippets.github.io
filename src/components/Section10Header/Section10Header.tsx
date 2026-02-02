import { TextRoll } from "@site/src/common/components/TextRoll/TextRoll";
import { Fragment } from "react";
import { DownloadSection } from "./components/DownloadSection/DownloadSection";
import {
  Header,
  ImageWrapperContainer,
  StyledDesktopImageWrapper,
  StyledFeatherIcon,
  StyledIPhoneX,
  StyledScribble,
  StyledSection,
} from "./styled";

function shuffle(array: Array<string>) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const words = shuffle([
  "Lightweight",
  "Free of Charge",
  "Simple",
  "Offline-first",
  "Powerful",
  "Effortless",
  "Focused",
  "Frictionless",
  "Flexible",
  "Elegant",
  "Future-proof",
  "Non-proprietary",
  "Distraction-free",
]);

export function Section10Header() {
  return (
    <Fragment>
      <StyledSection>
        <Header>
          <h1>
            Note Taking Can Be &nbsp;
            <em>
              <TextRoll
                words={words}
                children={
                  <Fragment>
                    <StyledScribble variation={1}></StyledScribble>
                    <StyledFeatherIcon></StyledFeatherIcon>
                  </Fragment>
                }
              ></TextRoll>
            </em>
          </h1>
        </Header>

        <ImageWrapperContainer>
          <StyledDesktopImageWrapper>
            <img
              src={require("@site/static/media/general-todos.png").default}
            />
          </StyledDesktopImageWrapper>

          <StyledIPhoneX>
            <img
              src={require("@site/static/media/mobile-editor.png").default}
            />
          </StyledIPhoneX>
        </ImageWrapperContainer>
      </StyledSection>

      <DownloadSection></DownloadSection>
    </Fragment>
  );
}
