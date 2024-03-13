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
            { text: "Introduction", link: "/library/introduction" },
            { text: "Getting Help", link: "/getting-help" },
          ],
        },
        {
          text: "Agent Assist API Suite",
          items: [
            {
              text: "Introduction",
              link: "/library/agent-assist/agent-assist",
            },
            {
              text: "Getting started",
              link: "/library/agent-assist/getting-started",
            },
          ],
        },
        {
          text: "SMS Gateway",
          items: [
            { text: "What is SMS Gateway?", link: "/library/sms-gateway" },
            {
              text: "Getting Started",
              link: "/library/sms-gateway/getting-started",
            },
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
          text: "Location API",
          items: [
            {
              text: "Introduction",
              link: "/api/location/introduction",
            },
            {
              text: "Directions",
              link: "/api/location/directions",
            },
            {
              text: "Distance",
              link: "/api/location/distance",
            },
            {
              text: "Geocode",
              link: "/api/location/geocode",
            },
            {
              text: "Reverse Geocode",
              link: "/api/location/reverse-geocode",
            },
          ],
        },
        {
          text: "Summary API",
          items: [
            {
              text: "Introduction",
              link: "/api/summary/introduction",
            },
            {
              text: "Summarize Message",
              link: "/api/summary/message-summary",
            },
          ],
        },
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
          text: "Validate API",
          items: [
            {
              text: "Introduction",
              link: "/api/validation/introduction",
            },
            {
              text: "Validate Address",
              link: "/api/validation/validate-address",
            },
            {
              text: "Validate Message",
              link: "/api/validation/validate-message",
            },
            {
              text: "Validate Phone Number",
              link: "/api/validation/validate-phone-number",
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
            {
              text: "Daily Forecast",
              link: "/api/weather/daily-forecast",
            },
            {
              text: "Weather Alerts",
              link: "/api/weather/alerts",
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
