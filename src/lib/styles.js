// Explicit links retain the existing cascade order. Vite versions these shared files.
import main from "../styles/main.css?url";
import docs from "../styles/docs.css?url";
import brand from "../styles/brand.css?url";
import encryption from "../styles/encryption.css?url";
import pricing from "../styles/pricing.css?url";
import legal from "../styles/legal.css?url";
import themes from "../styles/themes.css?url";

export const homeStyles = [main, brand, encryption, themes];
export const docsStyles = [docs, brand, themes];
export const pricingStyles = [docs, pricing, brand, themes];
export const legalStyles = [docs, brand, legal, themes];
