import Layout from "@theme/Layout";
import pricingData from "../../static/pricing.json";
import styles from "./pricing.module.css";

type PricingFeature = {
  text: string;
  planned?: boolean;
};

type PricingPlan = {
  name: string;
  price: string;
  priceNote?: string | null;
  featured?: boolean;
  muted?: boolean;
  badge?: string | null;
  features: PricingFeature[];
  plannedFeatures?: PricingFeature[];
};

type PricingData = {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
};

const data = pricingData as PricingData;

function boxClassName(plan: PricingPlan) {
  return [
    styles.box,
    plan.featured ? styles.featured : "",
    plan.muted ? styles.muted : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function featureClassName(feature: PricingFeature) {
  return [styles.feature, feature.planned ? styles.featurePlanned : ""]
    .filter(Boolean)
    .join(" ");
}

export default function Pricing() {
  return (
    <Layout
      title="A free to use, cross-platform productivity app"
      description="Snippets is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored."
    >
      <div className={styles.styledSection}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span>{data.title}</span>
          </h1>

          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        <div className={styles.sectionRow}>
          {data.plans.map((plan) => (
            <div key={plan.name} className={boxClassName(plan)}>
              <div className={styles.planHeader}>
                <h2 className={styles.planName}>{plan.name}</h2>

                <div className={styles.planPrice}>
                  {plan.price}
                  {plan.priceNote && (
                    <span className={styles.planPriceNote}>
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                {plan.badge && (
                  <span className={styles.badge}>{plan.badge}</span>
                )}
              </div>

              <ul className={styles.featureList}>
                {plan.features.map((feature) => (
                  <li key={feature.text} className={featureClassName(feature)}>
                    {feature.text}
                  </li>
                ))}
              </ul>

              {plan.plannedFeatures && plan.plannedFeatures.length > 0 && (
                <div className={styles.plannedBlock}>
                  <div className={styles.plannedLabel}>Planned features</div>

                  <ul className={styles.plannedFeatureList}>
                    {plan.plannedFeatures.map((feature) => (
                      <li
                        key={feature.text}
                        className={featureClassName(feature)}
                      >
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
