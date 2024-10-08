/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          editUrl: "https://github.com/reduxjs/angular-redux/edit/main/website",
          include: ["{introduction,tutorials}/*.{md,mdx}"], // no other way to exclude node_modules
        },
        theme: {
          customCss: [
            require.resolve("./static/css/custom.css"),
            require.resolve("./static/css/404.css"),
            require.resolve("./static/css/codeblock.css"),
          ],
        },
      },
    ],
  ],
  title: "Angular Redux", // Title for your website.
  onBrokenLinks: "throw",
  tagline: "Official Angular bindings for Redux",
  url: "https://angular-redux.js.org", // Your website URL
  baseUrl: "/",
  // Used for publishing and more
  projectName: "angular-redux",
  organizationName: "reduxjs",

  // For no header links in the top nav bar -> headerLinks: [],
  /* path to images for header/footer */
  favicon: "img/favicon/favicon.ico",

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "/scripts/sidebarScroll.js",
    "/scripts/codeblock.js",
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
      async: true,
    },
  ],
  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  customFields: {
    repoUrl: "https://github.com/reduxjs/angular-redux",
  },
  themeConfig: {
    metadata: [{ name: "twitter:card", content: "summary" }],
    prism: {
      theme: require("./static/scripts/monokaiTheme.js"),
    },
    image: "img/redux-logo-landscape.png",
    navbar: {
      title: "Angular Redux",
      logo: {
        alt: "Redux Logo",
        src: "img/redux.svg",
      },
      items: [
        {
          to: "introduction/getting-started",
          label: "Getting Started",
          position: "right",
        },
        {
          to: "tutorials/quick-start",
          label: "Tutorial",
          position: "right",
        },
        {
          href: "https://www.github.com/reduxjs/angular-redux",
          label: "GitHub",
          position: "right",
          className: "github",
        },
        {
          href: "/introduction/getting-started#help-and-discussion",
          label: "Need help?",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Redux Logo",
        src: "img/redux_white.svg",
      },
      copyright: "Copyright (c) 2024-present the Redux documentation authors.",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "introduction/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/angular-redux",
            },
            {
              label: "Discord",
              href: "https://discord.gg/0ZcbPKXt5bZ6au5t",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/reduxjs/angular-redux",
            },
            {
              html: `
                <a
                  class="github-button"
                  href="https://github.com/reduxjs/angular-redux"
                  data-icon="octicon-star"
                  data-count-href="/reduxjs/angular-redux/stargazers"
                  data-show-count="true"
                  data-count-aria-label="# stargazers on GitHub"
                  aria-label="Star this project on GitHub"
                >
                  Star
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.netlify.com">
                  <img
                    src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                    alt="Deploys by Netlify"
                  />
                </a>
              `,
            },
          ],
        },
      ],
    },
  },
};

module.exports = siteConfig;
