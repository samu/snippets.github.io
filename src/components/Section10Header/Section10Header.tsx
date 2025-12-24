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

const words = [
  "Lightweight",
  "Free Of Charge",
  "Simple",
  "Offline-First",
  "Powerful",
  "Modular",
  "Private",
  "Cross-Platform",
  "Responsive",
];

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

          <h2>
            Snip Is Your Everyday &nbsp;
            <em>Productivity</em>
            &nbsp; Companion.
          </h2>
        </Header>

        <ImageWrapperContainer>
          <StyledDesktopImageWrapper>
            <img src={require("@site/static/img/general-todos.png").default} />
          </StyledDesktopImageWrapper>

          <StyledIPhoneX>
            <img src={require("@site/static/img/mobile-editor.png").default} />
          </StyledIPhoneX>
        </ImageWrapperContainer>
      </StyledSection>

      <DownloadSection></DownloadSection>
    </Fragment>
  );
}
