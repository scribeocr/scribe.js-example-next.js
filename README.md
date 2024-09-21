# Overview
This example repo shows how [scribe.js](https://github.com/scribeocr/scribe.js) can be used client-side in a Next.js application.

# Instructions
To run this example locally, perform the following steps.
```sh
## Clone the repo
git clone https://github.com/scribeocr/scribe.js-example-next.js.git
cd scribe.js-example-next.js

## Install the dependencies
npm install

## Start the dev server
npm run dev
```
After the server is running, visit the web page indicated, and you will be able to extract text from an image or PDF.

# Notes
This repo was created by running `npx create-next-app@latest` and then modifying the [pages/index.js](./pages/index.js) file.  The only non-default setting required is hard-coding `process` to `undefined` within the Webpack configuration, which can be seen in the [next.config.mjs](./next.config.mjs) file.  This is necessary to prevent Scribe.js from automatically picking the Node.js implementations of certain features during the Webpack build step (Webpack uses Node.js).

*All content beneath this line is from the Next.js template.*

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
