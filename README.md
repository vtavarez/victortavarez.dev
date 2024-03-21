![Homepage 1](/public/preview/preview_one.jpg)
![Homepage 2](/public/preview/preview_two.jpg)

## Features

- Next.js 14
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / SEO
- Easy to customize
- Nice project structure
- Shadcn UI components
- Tablet & mobile friendly
- Fetches most recent GitHub repos.
- Webhook routes for data revalidation.
- Continuous deployment with [Vercel](https://vercel.com)
- Contact form powered by Nodemailer, AWS SES and Google Recaptcha v3
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

[Bun](https://bun.sh)

Create a new file `.env.local` and put these env variables with your Sanity CMS,
GitHub, AWS SES, and Google ReCaptcha tokens.

```bash
// Sanity
SANITY_PROJECT_ID=xxxxxxxxxx
SANITY_DATASET=xxxxxxxxxx

// Github
GITHUB_TOKEN=xxxxxxxxxx

// SES
SES_EMAIL_HOST=xxxxxxxxxx
SES_EMAIL_USER=xxxxxxxxxx
SES_EMAIL_PASS=xxxxxxxxxx
SES_EMAIL_FROM='"Hey, from youremailhere <hey@youremailhere.com>'
SES_EMAIL_TO=xxxxxxxxxx

// ReCaptcha v3
RECAPTCHA_SITE_KEY=xxxxxxxxxx
RECAPTCHA_SECRET_KEY=xxxxxxxxxx
```

When deploying on Vercel, you will have to set your private and public keys
key(s) there as well.

## Install dependencies

```bash
bun install
```

## Start dev server

```bash
bun dev
```

## Built with

- Next.js 14
- Framer Motion
- TailwindCSS
- Shadcn
- Sanity
- And these useful of JavaScript libraries [package.json](package.json)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
