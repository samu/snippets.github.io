import { ReactNode } from "react";
import {
  BottomSlider,
  Inner,
  LockButton,
  Notch,
  Outer,
  ShadowContainer,
  SilentModeButton,
  VolumeButtonBottom,
  VolumeButtonTop,
} from "./styled";

type Props = {
  className?: string;
  children: ReactNode;
};

export function IPhoneX(props: Props) {
  return (
    <ShadowContainer className={props.className}>
      <Outer>
        <Inner>
          {props.children}
          <Notch></Notch>
          <BottomSlider></BottomSlider>
        </Inner>

        <SilentModeButton></SilentModeButton>
        <VolumeButtonTop></VolumeButtonTop>
        <VolumeButtonBottom></VolumeButtonBottom>
        <LockButton></LockButton>
      </Outer>
    </ShadowContainer>
  );
}
