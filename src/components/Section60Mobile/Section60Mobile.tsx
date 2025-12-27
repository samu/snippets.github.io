import { DownloadButton } from "@site/src/common/components/DownloadButton/DownloadButton";
import { MacOsIcon } from "@site/src/common/components/DownloadButton/MacOsIcon";
import { SlideIn } from "@site/src/common/components/SlideIn/SlideIn";
import { SectionRow } from "../common";
import { StyledIPhoneX, StyledSection, SytledBottomRow } from "./styled";

export function Section60Mobile() {
  return (
    <StyledSection>
      <SectionRow $flexDirection="column">
        <h1>Available on Mobile</h1>

        <SlideIn>
          <StyledIPhoneX>
            <img src={require("@site/static/img/mobile-editor.png").default} />
          </StyledIPhoneX>
        </SlideIn>
      </SectionRow>

      <SytledBottomRow $flexDirection="column">
        <p>Beta available on iOS. Coming soon on all other platforms.</p>

        <DownloadButton href="https://testflight.apple.com/join/3wpgBj2Z">
          <MacOsIcon></MacOsIcon>
          TestFlight
        </DownloadButton>
      </SytledBottomRow>
    </StyledSection>
  );
}
