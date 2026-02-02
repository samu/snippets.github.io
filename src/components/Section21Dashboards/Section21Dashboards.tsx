import { HeadersScribble } from "./components/HeadersScribble";
import { SubHeaderScribble } from "./components/SubHeaderScribble";
import { StyledImageWrapper, StyledSection } from "./styled";

export function Section21Dashboards() {
  return (
    <StyledSection>
      <h1>
        <span>Dashboards</span> <HeadersScribble></HeadersScribble>
      </h1>

      <h2>
        <span>Everything in one place.</span>
        <SubHeaderScribble></SubHeaderScribble>
      </h2>

      <p>
        Put notes and tables alongside each other to keep related information
        together. Snippets gives you a flexible workspace where ideas live side
        by side and are easy to find through visual structure.
      </p>

      <StyledImageWrapper>
        <img src={require("@site/static/media/dashboard.png").default} />
      </StyledImageWrapper>
    </StyledSection>
  );
}
