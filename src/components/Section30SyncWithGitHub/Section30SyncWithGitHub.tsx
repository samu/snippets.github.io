import { SlideIn } from "@site/src/common/components/SlideIn/SlideIn";
import { SectionRow } from "../common";
import {
  GitHubLogoWrapper,
  StyledMainSectionRow,
  StyledSection,
} from "./styled";

export function Section30SyncWithGitHub() {
  return (
    <StyledSection>
      <SlideIn>
        <SectionRow>
          <h1>Sync with GitHub</h1>
          <GitHubLogoWrapper>
            <img src={require("@site/static/img/github-mark.png").default} />
          </GitHubLogoWrapper>
        </SectionRow>
      </SlideIn>

      <StyledMainSectionRow>
        <SlideIn type="from-left" animationDelay={0.5}>
          <p>
            Snip allows you to sync all your notes to a GitHub repo by using a
            fine grained access token. This has the following advantages:
          </p>
        </SlideIn>

        <SlideIn type="from-right" animationDelay={0.5}>
          <ul>
            <li>You never lose your notes</li>
            <li>You have access from multiple devices</li>
            <li>You can store your notes for free, forever</li>
          </ul>
        </SlideIn>
      </StyledMainSectionRow>
    </StyledSection>
  );
}
