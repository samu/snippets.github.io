import { IPhoneX } from "@site/src/common/components/IPhoneX/IPhoneX";
import styled from "styled-components";
import { ImageWrapper, Section } from "../common";
import { FeatherIcon } from "./components/FeatherIcon";
import { Scribble } from "./components/Scribble";

export const StyledSection = styled(Section)`
  background: linear-gradient(
    180deg,
    var(--accent-contrast-color-1) 20%,
    var(--accent-color-1)
  );

  min-height: calc(
    min(
      100vh - var(--ifm-navbar-height) -
        var(--landing-page-download-section-height),
      80em
    )
  );
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 1em;
    margin-bottom: 2em;
    font-size: 1em;

    em {
      text-align: center;
    }
  }

  h2 {
    display: none;
    font-size: 1.5em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.25em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5em;
    }

    h2 {
      display: block;
      font-size: 1.5em;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 3.25em;
    }
  }
`;

export const StyledScribble = styled(Scribble)`
  position: absolute;
  margin-top: 1.75em;
  margin-left: 0.25em;
  width: 6.5em;
  stroke: var(--accent-color-1);
  fill: var(--accent-color-1);
`;

export const StyledFeatherIcon = styled(FeatherIcon)`
  width: 1em;
  position: absolute;
  right: -0.8em;
  top: 1.25em;
`;

export const ImageWrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 1.25em;
  padding-bottom: 3em;
`;

export const StyledDesktopImageWrapper = styled(ImageWrapper).attrs({
  $boxShadow: true,
})`
  width: 90%;
  max-width: 1050px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledIPhoneX = styled(IPhoneX)`
  max-width: 393px;

  @media (max-width: 576px) {
    width: 60%;
  }

  @media (min-width: 576px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
