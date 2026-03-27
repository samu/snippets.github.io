import Layout from "@theme/Layout";
import styles from "./legal.module.css";

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Learn how Snippets handles local notes, optional sync, feedback submissions, and limited first-party website analytics."
    >
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            {/* <div className={styles.eyebrow}>Legal</div> */}
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.subtitle}>
              This policy explains what data Snippets handles today, where it is
              stored, and how limited service data is used to keep the product
              running reliably.
            </p>
          </header>

          <section className={styles.card}>
            <div className={styles.meta}>
              <span>Effective Date: March 25, 2026</span>
              <span>Snippets</span>
            </div>

            <div className={styles.sections}>
              <section className={styles.section}>
                <h2>Overview</h2>
                <p>
                  Snippets is designed around a local-first model. In normal
                  use, notes and related content are stored on the user&apos;s
                  own device unless the user chooses an external sync option.
                </p>
                <p>
                  We aim to keep data collection limited to what is required to
                  operate the website, receive feedback, prevent abuse, and
                  support optional features chosen by the user.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Data Storage and Optional Sync</h2>
                <p>
                  Notes are stored locally on the user&apos;s device by default.
                  Users may optionally enable synchronization using the local
                  file system or a GitHub repository under their own GitHub
                  account.
                </p>
                <p>
                  If GitHub sync is enabled, synced content is stored and
                  processed by GitHub under the user&apos;s own GitHub setup and
                  is subject to GitHub&apos;s terms and privacy practices.
                </p>
              </section>

              <section className={styles.section}>
                <h2>User Accounts</h2>
                <p>
                  Snippets does not currently require users to create an account
                  to use the app. Future versions may introduce account-based
                  features, and this policy will be updated if that happens.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Network Requests and Feedback</h2>
                <p>
                  The app uses a small number of backend endpoints, for example
                  to submit feedback or similar service requests.
                </p>
                <p>
                  For those requests, the client&apos;s IP address may be
                  processed to prevent abuse, apply rate limits, and protect
                  service stability. Feedback content is stored as submitted so
                  it can be reviewed and acted on.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Website Analytics, Cookies, and Trackers</h2>
                <p>
                  The Snippets website uses limited first-party analytics to
                  understand basic website usage and interest in downloads. In
                  particular, the landing page may send events when it is
                  visited, when a visitor scrolls substantially through it,
                  when a download button is clicked, and when a browser
                  referrer is available.
                </p>
                <p>
                  These analytics events are sent directly to a Snippets-owned
                  backend endpoint. They are not used for advertising or
                  cross-site behavioral profiling, and the website does not use
                  cookies for analytics or marketing.
                </p>
                <p>
                  Like any standard web request, analytics requests may include
                  technical information such as the client&apos;s IP address and
                  request metadata processed by the receiving infrastructure.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Hosting and Sharing</h2>
                <p>
                  Data collected through backend service endpoints is hosted on
                  Amazon Web Services. That data is not sold and is not shared
                  with third parties except as needed to operate the service
                  infrastructure used by Snippets.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Changes to This Policy</h2>
                <p>
                  This policy may be updated as Snippets evolves, including when
                  new product features, authentication, or additional online
                  services are introduced.
                </p>
              </section>
            </div>

            <p className={styles.footerNote}>
              Questions about this policy can be sent to{" "}
              <a href="mailto:support@snippets.ch">support@snippets.ch</a>.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
