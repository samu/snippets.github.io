import { ReactNode } from "react";
import { sendAnalytics } from "../../sendAnalytics";
import { StyledAnchor, StyledDownloadIcon } from "./styled";

type Props = {
  href: string;
  children: ReactNode;
  os: string;
  disabled?: boolean;
};

export function DownloadButton(props: Props) {
  return (
    <StyledAnchor
      href={props.href}
      $disabled={props.disabled}
      onClick={() =>
        sendAnalytics({ type: "download", metadata: { os: props.os } })
      }
    >
      <StyledDownloadIcon>{props.children}</StyledDownloadIcon>
    </StyledAnchor>
  );
}
