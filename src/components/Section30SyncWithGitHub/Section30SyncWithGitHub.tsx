import { ComingSoonBadge } from "@site/src/common/components/ComingSoonBadge/ComingSoonBadge";
import { Section, SectionRow } from "../common";
import { CloudIcon } from "./components/CloudIcon";
import { FloppyIcon } from "./components/FloppyIcon";
import { GitHubIcon } from "./components/GitHubIcon";
import { HddRackIcon } from "./components/HddRackIcon";
import { MarkdownIcon } from "./components/MarkdownIcon";
import { SubHeaderScribble } from "./components/SubHeaderScribble";
import { SyncIcon } from "./components/SyncIcon";
import styles from "./styles.module.css";

export function Section30SyncWithGitHub() {
  return (
    <Section className={styles.section}>
      <SectionRow>
        <h1>
          <span className={styles.shimmer}>Sync</span> with
          <span className={styles.anything}>anything</span>
        </h1>
      </SectionRow>

      <h2>
        <span>Your data, your choice.</span>
        <SubHeaderScribble></SubHeaderScribble>
      </h2>

      <SectionRow className={styles.mainSectionRow}>
        <div>
          <h3>
            Local <FloppyIcon></FloppyIcon>
          </h3>
          <p>
            Keep your data on your device and sync using the local file system.
            Designed for maximum privacy.
          </p>
        </div>

        <div>
          <h3>
            GitHub <GitHubIcon></GitHubIcon>
          </h3>
          <p>
            Sync with a private GitHub repository. Changes are synced instantly
            via HTTP - no manual commits required. Works on mobile, too.
          </p>
        </div>

        <div>
          <h3>
            Self-Hosted <HddRackIcon></HddRackIcon>
            <ComingSoonBadge></ComingSoonBadge>
          </h3>
          <p>
            Run your own backend and stay fully in control of your data. Perfect
            when ownership, privacy, and cross-device sync matter most.
          </p>
        </div>

        <div>
          <h3>
            Snippets Cloud <CloudIcon></CloudIcon>
            <ComingSoonBadge></ComingSoonBadge>
          </h3>
          <p>
            Use our own cloud service for automatic, cross-device syncing. Your
            data stays seamlessly up to date everywhere, with zero setup or
            maintenance required.
          </p>
        </div>
      </SectionRow>

      <h4>
        Export to markdown <MarkdownIcon></MarkdownIcon>
      </h4>

      <p>Avoid vendor lock-in, keep your data forever.</p>

      {false && <SyncIcon className={styles.syncIcon}></SyncIcon>}
    </Section>
  );
}
