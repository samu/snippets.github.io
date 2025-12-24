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
        src: "img/logo.png",
      },
      items: [
        {
          to: "/docs/features",
          label: "Features",
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
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/samu/snippets/discussions",
            },
            {
              label: "Bluesky",
              href: "https://bsky.app/profile/snippets.ch",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Snippets.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      disableSwitch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
