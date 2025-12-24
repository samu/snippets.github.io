import { ReactNode } from "react";
import { StyledAnchor, StyledDownloadIcon } from "./styled";

type Props = {
  href: string;
  children: ReactNode;
};

export function DownloadButton(props: Props) {
  return (
    <StyledAnchor href={props.href}>
      <StyledDownloadIcon>{props.children}</StyledDownloadIcon>
    </StyledAnchor>
  );
}
