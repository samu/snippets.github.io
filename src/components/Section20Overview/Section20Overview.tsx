import { SlideIn } from "@site/src/common/components/SlideIn/SlideIn";
import { SectionRow } from "../common";
import {
  BottomShadowMaker,
  StyledImageWrapper,
  StyledSection,
  StyledTextBox,
  TopShadowLeft,
  TopShadowRight,
} from "./styled";

export function Section20Overview() {
  return (
    <StyledSection>
      <TopShadowLeft $hide={false}></TopShadowLeft>
      <TopShadowRight $hide={false}></TopShadowRight>
      <BottomShadowMaker $hide={false}></BottomShadowMaker>

      <SlideIn>
        <SectionRow>
          <StyledTextBox>
            <h1>Dashboards</h1>

            <p>
              Pin notes to the navigation bar and use references to create
              dashboards.
            </p>
          </StyledTextBox>

          <StyledImageWrapper>
            <img src={require("@site/static/img/dashboard.png").default} />
          </StyledImageWrapper>
        </SectionRow>
      </SlideIn>
    </StyledSection>
  );
}
