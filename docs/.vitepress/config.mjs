import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Toolbox Docs",
  description:
    "Simple, Secure, Compliant Messaging for Everyday Communications.",
  cleanUrls: {
    type: Boolean,
    default: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo-plain.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Document Library", link: "/introduction" },
      { text: "API Reference", link: "/api-reference" },
    ],

    sidebar: [
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
