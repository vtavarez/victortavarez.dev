# Portfolio for developers

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa98ff01-394f-401a-8bcc-fd51c2d3d4e6/deploy-status)](https://app.netlify.com/sites/heuristic-kirch-2acb5b/deploys)

## Original Theme

[gatsby-portfolio-dev](https://github.com/smakosh/gatsby-portfolio-dev)

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [rawpixel.com](https://rawpixel.com)
- Tablet & mobile friendly
- Continuous deployment with [Netlify](https://netlify.com)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)
- Blog functionality via Contentful CMS
- Comments via Disqus

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   ├── components          # Components
│   │   │── common          # Common components
│   │   │── landing         # Components used for landing page
│   │   └── theme           # Header, Footer & Template styles
│   │─── state              # Application state provider
│   │─── pages              # Pages
│   └──── templates         # Tempalates
│         │── article       # Tempalate used for blog posts
│         │── blog          # Template used for blog page
│         │── tag           # Tempalte used for Tag page
│         └── tags          # Template used for Tags page
│
└── static                  # Icons, favicon & SVG illustrations
```

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Please create a new file `.env.development` and put these env variables with your GitHub and Contentful tokens.

> If you're building locally, you will have to create a new file `.env.production` and put the same env variables

```bash
GITHUB_TOKEN=xxxxxxxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxx
```

To enable comments via Disqus please add this env variable with your Disqus short name.

```bash
GATSBY_DISQUS_NAME=yourSiteShortname
```

Don't forget to edit your site's data on `data/config.js` file with your Google Recaptcha public key

When deploying on Netlify, you will have to set the private key as well

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

I highly recommend you check this [repository](https://github.com/imorente/gatsby-netlify-form-example) for more details about the Google Recaptcha and Netlify forms

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Gatsby
- React & GraphQL
- Contentful
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
