import Layout from "@theme/Layout";
import styles from "./legal.module.css";

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="Read the basic terms governing use of the Snippets website, app, optional sync integrations, and support channels."
    >
      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.hero}>
            {/* <div className={styles.eyebrow}>Legal</div> */}
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.subtitle}>
              These terms describe the basic conditions for using the Snippets
              app, website, documentation, and related support or feedback
              channels.
            </p>
          </header>

          <section className={styles.card}>
            <div className={styles.meta}>
              <span>Effective Date: March 23, 2026</span>
              <span>Snippets</span>
            </div>

            <div className={styles.sections}>
              <section className={styles.section}>
                <h2>Acceptance of These Terms</h2>
                <p>
                  By accessing or using Snippets, you agree to these Terms of
                  Service. If you do not agree, you should not use the website
                  or related services.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Use of the Product</h2>
                <p>
                  Snippets is provided as a productivity and note-taking tool.
                  You may use it only in compliance with applicable law and in a
                  way that does not interfere with the website, app, or related
                  infrastructure.
                </p>
              </section>

              <section className={styles.section}>
                <h2>User Content and Responsibility</h2>
                <p>
                  You are responsible for the content you create, store, sync,
                  or submit through Snippets. You should make sure you have the
                  rights to any material you use and keep appropriate backups of
                  your data.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Optional Third-Party Services</h2>
                <p>
                  Snippets may support optional integrations or sync methods
                  involving third-party services, such as GitHub. Those services
                  are governed by their own terms, privacy policies, and
                  operational practices.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Availability and Changes</h2>
                <p>
                  Snippets may change, improve, suspend, or discontinue features
                  at any time. We aim to keep the product reliable, but we do
                  not guarantee uninterrupted availability of every feature or
                  service endpoint.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Acceptable Use</h2>
                <ul>
                  <li>
                    You may not use Snippets to abuse, overload, or interfere
                    with the website, backend endpoints, or related systems.
                  </li>
                  <li>
                    You may not attempt unauthorized access to systems, data, or
                    accounts connected to Snippets.
                  </li>
                  <li>
                    You may not submit unlawful, infringing, or malicious
                    content through support or feedback channels.
                  </li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>Disclaimer</h2>
                <p>
                  Snippets is provided on an &quot;as is&quot; and &quot;as
                  available&quot; basis to the extent permitted by applicable
                  law. We make no warranties regarding uninterrupted service,
                  fitness for a particular purpose, or error-free operation.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Limitation of Liability</h2>
                <p>
                  To the extent permitted by law, Snippets will not be liable
                  for indirect, incidental, special, consequential, or punitive
                  damages arising from use of the product or website.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Updates to These Terms</h2>
                <p>
                  These terms may be updated from time to time. Continued use of
                  Snippets after changes take effect means you accept the
                  updated terms.
                </p>
              </section>
            </div>

            <p className={styles.footerNote}>
              Questions about these terms can be sent to{" "}
              <a href="mailto:support@snippets.ch">support@snippets.ch</a>.
            </p>
          </section>
        </div>
      </main>
    </Layout>
  );
}
