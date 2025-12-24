import { DownloadButton } from "@site/src/common/components/DownloadButton/DownloadButton";
import { MacOsIcon } from "../../../../common/components/DownloadButton/MacOsIcon";
import {
  StyledSection,
  StyledSectionRowiOS,
  StyledSectionRowMacOS,
} from "./styled";

export function DownloadSection() {
  return (
    <StyledSection>
      <StyledSectionRowMacOS $flexDirection="column">
        <p> Available on macOS. Coming soon on all other platforms.</p>
        <DownloadButton href="https://github.com/simplicity/snip/releases/latest/download/Snip.dmg">
          <MacOsIcon></MacOsIcon>
        </DownloadButton>
      </StyledSectionRowMacOS>

      <StyledSectionRowiOS $flexDirection="column">
        <p> Available on iOS. Coming soon on all other platforms.</p>
        <DownloadButton href="https://apps.apple.com/ch/app/snip-notes-todos-reminders/id1584692945">
          <MacOsIcon></MacOsIcon>
        </DownloadButton>
      </StyledSectionRowiOS>
    </StyledSection>
  );
}
