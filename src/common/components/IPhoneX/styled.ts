import styled from "styled-components";

export const ShadowContainer = styled.div`
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 1));
  transform: translateZ(0); // fix flickering shadow on safari
`;

export const Outer = styled.div`
  position: relative;
  display: flex;

  --aspect-ratio: 9 / 19.5;
  --border-width: 3%;
  --border-radius-inner: 15%;
  --border-radius-outer: calc(var(--border-radius-inner) + var(--border-width));

  border-radius: var(--border-radius-outer) /
    calc(var(--border-radius-outer) * var(--aspect-ratio));

  background-color: black;
`;

export const Inner = styled.div`
  width: 100%;
  margin: var(--border-width);
  aspect-ratio: var(--aspect-ratio);
  position: relative;
  display: flex;
  border-radius: 15% / calc(15% * var(--aspect-ratio));
  overflow: hidden;
  box-shadow: 0 0 0 var(--iphone-x-device-border-width) black;
`;

export const Notch = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  height: 3%;
  width: 48%;
  background-color: black;
  border-bottom-right-radius: 1000px;
  border-bottom-left-radius: 1000px;
  transform: translateX(-50%);
  z-index: 1000000000;
`;

export const BottomSlider = styled.div`
  position: absolute;
  bottom: 1%;
  left: 50%;
  height: 1%;
  width: 40%;
  background-color: black;
  border-radius: 1000px;
  transform: translateX(-50%);
  z-index: 1000000000;
`;

export const SilentModeButton = styled.div`
  position: absolute;
  top: 12%;
  left: 0.1%;
  height: 5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`;

export const VolumeButtonTop = styled.div`
  position: absolute;
  top: 21%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`;

export const VolumeButtonBottom = styled.div`
  position: absolute;
  top: 32%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`;

export const LockButton = styled.div`
  position: absolute;
  top: 17%;
  right: 0.1%;
  height: 4%;
  width: 1%;
  background-color: black;
  transform: translateX(100%);
`;
