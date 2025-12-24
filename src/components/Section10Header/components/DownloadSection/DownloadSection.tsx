import { ComingSoonBadge } from "@site/src/common/components/ComingSoonBadge/ComingSoonBadge";
import { DownloadButton } from "@site/src/common/components/DownloadButton/DownloadButton";
import { LinuxIcon } from "@site/src/common/components/DownloadButton/LinuxIcon";
import { WindowsIcon } from "@site/src/common/components/DownloadButton/WindowsIcon";
import { MacOsIcon } from "../../../../common/components/DownloadButton/MacOsIcon";
import {
  StyledColumn,
  StyledColumnRow,
  StyledColumnRowiOS,
  StyledSection,
} from "./styled";

export function DownloadSection() {
  return (
    <StyledSection>
      <StyledColumnRow>
        <StyledColumn>
          <p>macOS</p>

          <DownloadButton href="https://github.com/samu/snippets/releases/download/v0.16.0/Snippets-0.16.0-arm64.dmg">
            <MacOsIcon></MacOsIcon> Silicon (M1, M2, etc)
          </DownloadButton>

          <DownloadButton href="https://github.com/samu/snippets/releases/download/v0.16.0/Snippets-0.16.0-x64.dmg">
            <MacOsIcon></MacOsIcon> Intel (older)
          </DownloadButton>
        </StyledColumn>

        <StyledColumn>
          <p>Windows</p>

          <DownloadButton href="https://github.com/samu/snippets/releases/download/v0.16.0/Snippets-0.16.0.Setup.exe">
            <WindowsIcon></WindowsIcon> Windows
          </DownloadButton>
        </StyledColumn>

        <StyledColumn>
          <p>Linux</p>

          <DownloadButton href="" disabled={true}>
            <LinuxIcon></LinuxIcon> Linux
            <ComingSoonBadge></ComingSoonBadge>
          </DownloadButton>
        </StyledColumn>
      </StyledColumnRow>

      <StyledColumnRowiOS>
        <StyledColumn>
          <p>iOS Beta</p>

          <DownloadButton href="https://testflight.apple.com/join/3wpgBj2Z">
            <MacOsIcon></MacOsIcon>
            TestFlight
          </DownloadButton>
        </StyledColumn>
      </StyledColumnRowiOS>
    </StyledSection>
  );
}
