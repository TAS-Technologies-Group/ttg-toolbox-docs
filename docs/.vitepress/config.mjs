import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Toolbox Docs",
  description:
    "Documentation for the TAS Technologies Group Toolbox. A curated suite of tools for contact centers.",
  cleanUrls: {
    type: Boolean,
    default: true,
  },
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo-plain.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Document Library", link: "/introduction" },
      { text: "API Reference", link: "/api/home" },
    ],

    sidebar: {
      "/": [
        {
          text: "Document Library",
          items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Help", link: "/getting-help" },
          ],
        },
        {
          text: "SMS Gateway",
          items: [
            { text: "What is SMS Gateway?", link: "/sms-gateway" },
            { text: "Getting Started", link: "/sms-gateway/getting-started" },
          ],
        },
        {
          text: "Secure Text App",
          items: [],
        },
        {
          text: "KPI Dashboard",
          items: [],
        },
        {
          text: "On Premise Fax Service",
          items: [],
        },
        {
          text: "eFax Service",
          items: [],
        },
        {
          text: "Encrypted Email Service",
          items: [],
        },
      ],
      "/api/": [
        {
          text: "Translation API",
          items: [
            {
              text: "Introduction",
              link: "/api/translation/introduction",
            },
            {
              text: "Translate Text",
              link: "/api/translation/translate-text",
            },
          ],
        },
        {
          text: "Weather API",
          items: [
            {
              text: "Introduction",
              link: "/api/weather/introduction",
            },
            {
              text: "Current Conditions",
              link: "/api/weather/current-conditions",
            },
            {
              text: "Hourly Forecast",
              link: "/api/weather/hourly-forecast",
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/TAS-Technologies-Group/ttg-toolbox-docs",
      },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern:
        "https://github.com/TAS-Technologies-Group/ttg-toolbox-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      copyright: "Copyright © 2024, TAS Technologies Group",
    },
  },
});
