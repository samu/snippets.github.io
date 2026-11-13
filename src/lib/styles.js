// Global foundations are shared; section-specific styles live in their Astro components.
// Keep the theme sheet last so theme tokens and screenshot visibility remain authoritative.
import base from "../styles/base.css?url";
import home from "../styles/home.css?url";
import content from "../styles/content.css?url";
import shared from "../styles/shared.css?url";
import reveal from "../styles/reveal.css?url";
import prose from "../styles/prose.css?url";
import actions from "../styles/actions.css?url";
import newsLayout from "../styles/news-layout.css?url";
import themes from "../styles/themes.css?url";

export const homeStyles = [base, home, shared, reveal, themes];
export const docsStyles = [base, content, shared, prose, themes];
export const pricingStyles = [base, content, shared, actions, themes];
export const legalStyles = [base, content, shared, themes];
export const newsStyles = [base, content, shared, prose, newsLayout, themes];
