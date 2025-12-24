import { ReactNode } from "react";
import { StyledAnchor, StyledDownloadIcon } from "./styled";

type Props = {
  href: string;
  children: ReactNode;
  disabled?: boolean;
};

export function DownloadButton(props: Props) {
  return (
    <StyledAnchor href={props.href} $disabled={props.disabled}>
      <StyledDownloadIcon>{props.children}</StyledDownloadIcon>
    </StyledAnchor>
  );
}
