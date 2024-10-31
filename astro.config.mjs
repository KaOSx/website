// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import starlight from "@astrojs/starlight";
import { targetBlank } from "./src/utils/targetBlank";

// https://astro.build/config
export default defineConfig({
  site: "https://kaosx.us",
  markdown: {
    rehypePlugins: [[targetBlank, { domain: "kaosx.us" }]],
  },
  integrations: [
    sitemap(),
    tailwind(),
    icon(),
    starlight({
      title: "KaOS",
      logo: {
        light: "/src/assets/logo.svg",
        dark: "/src/assets/logo.svg",
        replacesTitle: false,
      },
      components: {
        Head: "./src/components/HeadStarlight.astro",
      },
      favicon: "/favicon.ico",
      social: {
        github: "https://github.com/KaOSx",
        email:
          "https://groups.google.com/forum/?fromgroups#!forum/kaos-general",
        matrix: "https://webchat.kde.org/#/room/#kaosx:matrix.org",
        rss: "https://kaosx.us/rss.xml",
      },
      disable404Route: true,
      customCss: ["./src/styles/starlight.css"],
      editLink: {
        baseUrl: "https://github.com/kaosx/website/edit/main/",
      },
      sidebar: [
        { label: "Forum", link: "https://forum.kaosx.us/" },
        { label: "Download", link: "/download/" },
        { label: "News", link: "/news/" },
        { label: "Packages", link: "/packages/" },
        {
          label: "Basics",
          items: ["docs", "pacman", "bugs", "kernels"],
        },
        {
          label: "ISO & Install",
          collapsed: true,
          autogenerate: { directory: "install" },
        },
        {
          label: "Hardware Setup",
          collapsed: true,
          autogenerate: { directory: "hardware", collapsed: true },
        },
        {
          label: "Security",
          collapsed: true,
          autogenerate: { directory: "security", collapsed: true },
        },
        {
          label: "Packaging & KCP",
          collapsed: true,
          autogenerate: { directory: "packaging", collapsed: true },
        },
        {
          label: "Troubleshooting",
          collapsed: true,
          autogenerate: { directory: "troubleshooting", collapsed: true },
        },
        {
          label: "Applications",
          collapsed: true,
          autogenerate: { directory: "applications", collapsed: true },
        },
      ],
    }),
    mdx(),
  ],
});
