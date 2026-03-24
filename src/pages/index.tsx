import Layout from "@theme/Layout";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { useDimensions } from "../common/useDimensions";
import { PageDimensionsContext } from "../common/usePageDimensions";
import { Section10Header } from "../components/Section10Header/Section10Header";
import { Section20Overview } from "../components/Section20Overview/Section20Overview";
import { Section21Dashboards } from "../components/Section21Dashboards/Section21Dashboards";
import { Section30SyncWithGitHub } from "../components/Section30SyncWithGitHub/Section30SyncWithGitHub";
import { Section31Encryption } from "../components/Section31Encryption/Section31Encryption";
import { Section40Journaling } from "../components/Section40Journaling/Section40Journaling";
import { Section50Plugins } from "../components/Section50Plugins/Section50Plugins";
import { Section60Mobile } from "../components/Section60Mobile/Section60Mobile";

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
        <main
          ref={ref}
          className={styles.main}
          style={{ opacity: ready ? 1 : 0, transition: "opacity 0s" }}
        >
          <Section10Header />
          <Section20Overview />
          <Section21Dashboards />
          <Section30SyncWithGitHub />
          <Section31Encryption />
          <Section40Journaling />
          <Section50Plugins />
          <Section60Mobile />
        </main>
      </Layout>
    </PageDimensionsContext.Provider>
  );
}
