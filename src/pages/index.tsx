import Layout from "@theme/Layout";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDimensions } from "../common/useDimensions";
import { PageDimensionsContext } from "../common/usePageDimensions";
import { Section10Header } from "../components/Section10Header/Section10Header";
import { Section20Overview } from "../components/Section20Overview/Section20Overview";
import { Section21Dashboards } from "../components/Section21Dashboards/Section21Dashboards";
import { Section30SyncWithGitHub } from "../components/Section30SyncWithGitHub/Section30SyncWithGitHub";
import { Section40SearchAndIcons } from "../components/Section40SearchAndIcons/Section40SearchAndIcons";
import { Section50Plugins } from "../components/Section50Plugins/Section50Plugins";
import { Section60Mobile } from "../components/Section60Mobile/Section60Mobile";

const StyledMain = styled.main`
  em {
    font-style: normal;
    color: var(--accent-color-1);
    white-space: nowrap;
  }
`;

export default function Home() {
  const ref = useRef<HTMLElement | null>(null);

  const dimensions = useDimensions(ref);

  // Small hack to avoid a visual glitch on page load
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setReady(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageDimensionsContext.Provider value={dimensions}>
      <Layout
        title="A free to use, cross-platform productivity app"
        description="Snippets is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored."
      >
        <StyledMain
          ref={ref}
          style={{ opacity: ready ? 1 : 0, transition: "opacity 0s" }}
        >
          <Section10Header />
          <Section20Overview></Section20Overview>
          <Section21Dashboards></Section21Dashboards>
          <Section30SyncWithGitHub></Section30SyncWithGitHub>
          <Section40SearchAndIcons></Section40SearchAndIcons>
          <Section50Plugins></Section50Plugins>
          <Section60Mobile></Section60Mobile>
        </StyledMain>
      </Layout>
    </PageDimensionsContext.Provider>
  );
}
