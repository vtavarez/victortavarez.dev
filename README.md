## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / SEO
- Easy to customize
- Nice project structure
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com)
- Contact form protected by Google Recaptcha
- Can be deployed with one click or automated via web hook!
- Blog post thumbnails auto generated via AI
- Blog functionality powered by Sanity CMS

## Structure

```bash
├── api
│   └── posts.ts
├── app
│   ├── blog
│   │   ├── [slug]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── layout.tsx
│   ├── page.tsx
│   └── projects
│       ├── [slug]
│       │   └── page.tsx
│       └── page.tsx
├── bun.lockb
├── components
│   ├── landing
│   │   ├── Featured
│   │   │   └── index.tsx
│   │   ├── Hero
│   │   │   ├── Intro
│   │   │   │   └── index.tsx
│   │   │   ├── Summery
│   │   │   │   └── index.tsx
│   │   │   └── index.tsx
│   │   ├── Scene
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── theme
│   │   ├── EyebrowText
│   │   │   └── index.tsx
│   │   ├── Footer
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   └── index.tsx
│   │   ├── Project
│   │   │   └── index.tsx
│   │   ├── ValueProp
│   │   │   └── index.tsx
│   │   └── index.ts
│   └── ui
│       ├── Button
│       │   ├── button.tsx
│       │   └── index.tsx
│       ├── Card
│       │   └── index.tsx
│       ├── DropdownMenu
│       │   └── index.tsx
│       ├── Menu
│       │   └── index.tsx
│       ├── Navigation
│       │   ├── index.tsx
│       │   └── items.json
│       └── index.ts
├── components.json
├── lib
│   ├── hooks
│   │   └── index.tsx
│   ├── provider
│   │   ├── next-theme.tsx
│   │   └── react-query.tsx
│   └── utils
│       └── index.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── public
├── styles
│   └── globals.css
├── tailwind.config.ts
└── tsconfig.json
```

## Prerequisites

[Bun](https://yarnpkg.com/en/)

Please create a new file `.env.local` and put these env variables with your GitHub and Sanity tokens.

> If you're building locally, you will have to create a new file `.env.local` and put the same env variables

### Sanity

```bash
GITHUB_TOKEN=xxxxxxxxxx
SANITY_ACCESS_TOKEN=xxxxxxxxxx
```

### Google ReCaptcha

```bash
SITE_RECAPTCHA_KEY=xxxxx

SITE_RECAPTCHA_SECRET=xxxxx
```

When deploying on Vercel, you will have to set your private key(s) there as well.

## Install dependencies

```bash
bun
```

## Start dev server

```bash
bun dev
```

### Clear cache

This removes the `.cache/` & `public/` folders

```bash
bun reset
```

## Built with

- Next.js
- Framer Motion
- Sanity
- Mystrial AI
- Three.js
- TailwindCSS
- And these useful of JavaScript libraries [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
