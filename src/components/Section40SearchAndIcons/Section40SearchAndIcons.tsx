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

      <h1>Find and Organize</h1>

      <StyledSectionRow>
        <StyledTextBox>
          <h2>
            <IconWrapper>
              <SearchIcon></SearchIcon>
            </IconWrapper>
          </h2>

          <h2>Search</h2>

          <p>
            Snippets offers fast and efficient search functionality, delivering
            well-formatted results that provide clear and concise previews of
            the content.
          </p>
        </StyledTextBox>

        <StyledIllustrationFrame position="on-the-right">
          <ImageWrapper>
            <img src={require("@site/static/img/search.png").default} />
          </ImageWrapper>
        </StyledIllustrationFrame>
      </StyledSectionRow>

      <RowSpacer></RowSpacer>

      <StyledSectionRowReverse>
        <StyledTextBox>
          <h2>
            <IconWrapper>
              <EmojiHeartIcon></EmojiHeartIcon>
            </IconWrapper>
          </h2>

          <h2>Icons</h2>

          <p>
            Snippets includes a collection of icons that enhance the structure
            of your notes, adding both clarity and visual appeal.
          </p>
        </StyledTextBox>

        <StyledIllustrationFrame position="on-the-left">
          <ImageWrapper>
            <img src={require("@site/static/img/icons.png").default} />
          </ImageWrapper>
        </StyledIllustrationFrame>
      </StyledSectionRowReverse>
    </StyledSection>
  );
}
