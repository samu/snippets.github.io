import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Snippets",
  tagline: "Snippets Note Taking App",
  url: "https://snippets.ch",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "samu",
  projectName: "snippets.github.io",
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ] satisfies Array<Array<Preset.Options | string>>,

  themeConfig: {
    // Replace with your project's social card
    // TODO what's this?
    // image: "img/docusaurus-social-card.jpg",

    navbar: {
      hideOnScroll: true,
      title: "Snippets",
      logo: {
        alt: "Snippets Logo",
        src: "media/logo.png",
      },
      items: [
        {
          to: "/pricing",
          label: "Pricing",
          position: "right",
        },
        {
          to: "/docs/introduction",
          label: "Docs",
          position: "right",
        },
        // {
        //   type: "html",
        //   position: "right",
        //   value: `<button class="snip-cloud-button">Snippets Cloud</button>`,
        // },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Socials",
          items: [
            {
              label: "X",
              href: "https://x.com/snippetsHQ",
            },
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/snippets.ch",
            },
            {
              label: "Discord",
              href: "https://discord.gg/CWuenNJcpy",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Documentation",
              href: "/docs/introduction",
            },
            {
              label: "Pricing",
              href: "/pricing",
            },
            {
              label: "Contact Us",
              href: "mailto:support@snippets.ch",
            },
          ],
        },
        {
          title: "Comparison",
          items: [
            {
              label: "Snippets vs. Obsidian",
              href: "/docs/compared-to-obsidian",
            },
            {
              label: "Snippets vs. Notion",
              href: "/docs/compared-to-notion",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Snippets. Made in Switzerland 🇨🇭`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,

  plugins: ["./src/plugins/my-route-plugin"],
};

export default config;
