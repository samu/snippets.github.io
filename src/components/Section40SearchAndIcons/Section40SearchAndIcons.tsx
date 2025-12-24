import { SlideIn } from "@site/src/common/components/SlideIn/SlideIn";
import { IconWrapper, ImageWrapper } from "../common";
import { EmojiHeartIcon } from "./components/EmojiHeartIcon";
import { SearchIcon } from "./components/SearchIcon";
import {
  BottomRibbon,
  RowSpacer,
  StyledIllustrationFrame,
  StyledSection,
  StyledSectionRow,
  StyledSectionRowReverse,
  StyledTextBox,
  TopRibbon,
  TopShadowMaker,
} from "./styled";

export function Section40SearchAndIcons() {
  return (
    <StyledSection>
      <TopRibbon></TopRibbon>
      <TopShadowMaker></TopShadowMaker>
      <BottomRibbon></BottomRibbon>

      <h1>Find And Organize</h1>

      <StyledSectionRow>
        <SlideIn type="from-left">
          <StyledTextBox>
            <h2>
              <IconWrapper>
                <SearchIcon></SearchIcon>
              </IconWrapper>
            </h2>

            <h2>Search</h2>

            <p>
              Snip offers fast and efficient search functionality, delivering
              well-formatted results that provide clear and concise previews of
              the content.
            </p>
          </StyledTextBox>
        </SlideIn>

        <SlideIn type="from-right">
          <StyledIllustrationFrame position="at-the-bottom">
            <ImageWrapper>
              <img src={require("@site/static/img/search.png").default} />
            </ImageWrapper>
          </StyledIllustrationFrame>
        </SlideIn>
      </StyledSectionRow>

      <RowSpacer></RowSpacer>

      <StyledSectionRowReverse>
        <SlideIn type="from-right">
          <StyledTextBox>
            <h2>
              <IconWrapper>
                <EmojiHeartIcon></EmojiHeartIcon>
              </IconWrapper>
            </h2>

            <h2>Icons</h2>

            <p>
              Snip includes a collection of icons that enhance the structure of
              your notes, adding both clarity and visual appeal.
            </p>
          </StyledTextBox>
        </SlideIn>

        <SlideIn type="from-left">
          <StyledIllustrationFrame position="on-the-right">
            <ImageWrapper>
              <img src={require("@site/static/img/icons.png").default} />
            </ImageWrapper>
          </StyledIllustrationFrame>
        </SlideIn>
      </StyledSectionRowReverse>
    </StyledSection>
  );
}
