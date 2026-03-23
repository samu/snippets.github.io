import Layout from "@theme/Layout";
import styled, { css } from "styled-components";
import pricingData from "../../static/pricing.json";
import { Section } from "../components/common";

const StyledSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 6em;

  background: linear-gradient(
    180deg,
    var(--accent-contrast-color-1) 0%,
    #ffffff 42%,
    var(--accent-color-1) 100%
  );

  &::before {
    content: "";
    position: absolute;
    inset: auto -10% -8rem -10%;
    height: 16rem;
    background: radial-gradient(
      ellipse at center,
      rgba(var(--box-shadow-base-color), 0.08),
      transparent 70%
    );
    pointer-events: none;
    filter: blur(20px);
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5em;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  margin: 0 0 0.4em;
  font-size: 5rem;
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--title-color, inherit);

  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.45),
    0 8px 22px rgba(var(--box-shadow-base-color), 0.1);

  span {
    background: linear-gradient(
      135deg,
      var(--accent-color-1),
      rgba(var(--box-shadow-base-color), 0.92)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Subtitle = styled.p`
  margin: 0 auto;
  max-width: 42rem;
  opacity: 0.8;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const SectionRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1.5em;
  flex-wrap: wrap;
`;

const Box = styled.div<{ featured?: boolean; muted?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20em;
  min-height: 30em;
  padding: 2em;
  border-radius: 1.25em;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98),
    rgba(255, 255, 255, 0.94)
  );
  border: 1px solid rgba(var(--box-shadow-base-color), 0.08);
  box-shadow:
    0 10px 30px rgba(var(--box-shadow-base-color), 0.12),
    0 2px 8px rgba(var(--box-shadow-base-color), 0.06);
  opacity: ${({ muted }) => (muted ? 0.94 : 1)};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    opacity 180ms ease;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 5px;
    background: ${({ featured }) =>
      featured
        ? "linear-gradient(90deg, var(--accent-color-1), rgba(var(--box-shadow-base-color), 0.45))"
        : "linear-gradient(90deg, rgba(var(--box-shadow-base-color), 0.08), rgba(var(--box-shadow-base-color), 0.02))"};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top right,
      rgba(var(--box-shadow-base-color), 0.06),
      transparent 30%
    );
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.012);
    box-shadow:
      0 18px 45px rgba(var(--box-shadow-base-color), 0.18),
      0 8px 18px rgba(var(--box-shadow-base-color), 0.08);
    border-color: rgba(var(--box-shadow-base-color), 0.14);
    opacity: 1;
  }

  ${({ featured }) =>
    featured &&
    css`
      width: 22em;
      min-height: 32em;
      border: 1px solid rgba(var(--box-shadow-base-color), 0.12);
      box-shadow:
        0 20px 50px rgba(var(--box-shadow-base-color), 0.16),
        0 8px 20px rgba(var(--box-shadow-base-color), 0.08);

      @media (min-width: 960px) {
        transform: scale(1.04);
      }

      &:hover {
        @media (min-width: 960px) {
          transform: translateY(-10px) scale(1.055);
        }
      }
    `}
`;

const PlanHeader = styled.div`
  margin-bottom: 1.5em;
`;

const PlanName = styled.h2`
  margin: 0;
  font-size: 0.92rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(var(--box-shadow-base-color), 0.62);
`;

const PlanPrice = styled.div`
  margin-top: 0.45em;
  font-size: 2.25rem;
  font-weight: 750;
  line-height: 1.1;
`;

const PlanPriceNote = styled.span`
  font-size: 0.95rem;
  font-weight: 400;
  opacity: 0.7;
  margin-left: 0.35em;
`;

const Badge = styled.span`
  display: inline-block;
  margin-top: 0.85em;
  padding: 0.38em 0.75em;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(var(--box-shadow-base-color), 0.08);
  border: 1px solid rgba(var(--box-shadow-base-color), 0.08);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9em;
`;

const Feature = styled.li<{ planned?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.7em;
  line-height: 1.55;
  opacity: ${({ planned }) => (planned ? 0.72 : 1)};

  &::before {
    content: "${({ planned }) => (planned ? "◦" : "✓")}";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    flex-shrink: 0;
    font-weight: 800;
    color: ${({ planned }) =>
      planned
        ? "rgba(var(--box-shadow-base-color), 0.5)"
        : "var(--accent-color-1)"};
    margin-top: 0.05em;
  }
`;

const PlannedBlock = styled.div`
  margin-top: 1.35em;
  padding: 1em;
  border-radius: 1em;
  background: linear-gradient(
    180deg,
    rgba(var(--box-shadow-base-color), 0.03),
    rgba(var(--box-shadow-base-color), 0.06)
  );
  border: 1px solid rgba(var(--box-shadow-base-color), 0.08);
`;

const PlannedLabel = styled.div`
  margin-bottom: 0.85em;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(var(--box-shadow-base-color), 0.65);
`;

const PlannedFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.72em;
`;

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

export default function Pricing() {
  return (
    <Layout
      title="A free to use, cross-platform productivity app"
      description="Snippets is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored."
    >
      <StyledSection>
        <Header>
          <Title>
            <span>{data.title}</span>
          </Title>

          <Subtitle>{data.subtitle}</Subtitle>
        </Header>

        <SectionRow>
          {data.plans.map((plan) => (
            <Box key={plan.name} featured={plan.featured} muted={plan.muted}>
              <PlanHeader>
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  {plan.price}
                  {plan.priceNote && (
                    <PlanPriceNote>{plan.priceNote}</PlanPriceNote>
                  )}
                </PlanPrice>
                {plan.badge && <Badge>{plan.badge}</Badge>}
              </PlanHeader>

              <FeatureList>
                {plan.features.map((feature) => (
                  <Feature key={feature.text} planned={feature.planned}>
                    {feature.text}
                  </Feature>
                ))}
              </FeatureList>

              {plan.plannedFeatures && plan.plannedFeatures.length > 0 && (
                <PlannedBlock>
                  <PlannedLabel>Planned features</PlannedLabel>

                  <PlannedFeatureList>
                    {plan.plannedFeatures.map((feature) => (
                      <Feature key={feature.text} planned={feature.planned}>
                        {feature.text}
                      </Feature>
                    ))}
                  </PlannedFeatureList>
                </PlannedBlock>
              )}
            </Box>
          ))}
        </SectionRow>
      </StyledSection>
    </Layout>
  );
}
