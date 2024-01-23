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
    logo: "./images/logo-plain.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "SMS Gateway", link: "/sms-gateway" },
    ],

    sidebar: [
      {
        text: "SMS Gateway",
        items: [
          { text: "Introduction", link: "/sms-gateway" },
          { text: "Getting Started", link: "/sms-gateway/getting-started" },
        ],
      },
      {
        text: "Secure Text App",
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
