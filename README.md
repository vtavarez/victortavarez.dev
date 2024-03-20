## Features

- Next.js 14
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / SEO
- Easy to customize
- Nice project structure
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com)
- Contact form protected by Google Recaptcha v3
- Blog functionality powered by Sanity CMS

## Structure

```bash

├── app
│   ├── blog
│   ├── case-studies
│   ├── studio
│   ├── webhook
│   ├── actions.ts
│   ├── favicon.ico
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── routes
│   │   ├── blog
│   │   ├── case-studies
│   │   └── home
│   ├── theme
│   │   ├── ContactForm
│   │   ├── Content
│   │   ├── EyebrowText
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Heading
│   │   ├── Post
│   │   ├── Project
│   │   ├── ValueProp
│   │   ├── Work
│   │   └── index.ts
│   └── ui
│       ├── Animations
│       ├── Author
│       ├── Buttons
│       ├── Card
│       ├── DropdownMenu
│       ├── Form
│       ├── HorizontalContent
│       ├── Loaders
│       ├── Marquee
│       ├── Menu
│       ├── Navigation
│       ├── Pagination
│       ├── Typewriter
│       └── index.ts
├── lib
│   ├── data
│   ├── hooks
│   ├── schema
│   ├── types
│   └── utils
├── sanity
│   ├── lib
│   ├── schemas
│   ├── env.ts
│   └── schema.ts
├── styles
│   ├── globals.css
│   └── refractor.css
```

## Prerequisites

[Bun](https://yarnpkg.com/en/)

Please create a new file `.env.local` and put these env variables with your
GitHub and Sanity tokens.

> If you're building locally, you will have to create a new file `.env.local`
> and put the same env variables

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

When deploying on Vercel, you will have to set your private key(s) there as
well.

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
- TailwindCSS
- Sanity
- And these useful of JavaScript libraries [package.json](package.json)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
