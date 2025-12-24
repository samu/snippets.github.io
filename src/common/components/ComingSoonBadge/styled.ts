import styled from "styled-components";

export const Outer = styled.div`
  position: absolute;
  display: flex;
  font-size: 0.5em;
  bottom: 0;
  right: 0;
  background-color: var(--oc-yellow-5);
  color: black;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 0.5em;
  transform: translateY(2em) translateX(2em) rotate(-5deg);
  filter: drop-shadow(0px 2px 2px rgba(var(--box-shadow-base-color), 0.25));
`;
