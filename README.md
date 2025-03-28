![screencapture-portfolio-tau-three-50-vercel-app-2025-03-28-08_27_31](https://github.com/user-attachments/assets/5d101029-0e8c-4a6e-8616-300db39fb75e)This is a [Next.js](https://nextjs.org) portfolio bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Routing

page route

## First deplopment with next js 12

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

To Geenrate Sitemap, after build file

```bash
npm run sitemap
# or
yarn sitemap
# or
pnpm sitemap
# or
bun sitemap
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## Security

If you believe you have found a security vulnerability in Next.js, we encourage you to responsibly disclose this and NOT open a public issue. We will investigate all legitimate reports. Email security@vercel.com to disclose any security vulnerabilities. Alternatively, you can visit [this](https://vercel.com/security) link to know more about Vercel's security and report any security vulnerabilities.

## File Structure

```bash script
portfolio/
┣ components/
┃ ┣ About.jsx
┃ ┣ BlogCard.jsx
┃ ┣ EduExp.jsx
┃ ┣ Footer.jsx
┃ ┣ Main.jsx
┃ ┣ Navbar.jsx
┃ ┣ PinterestTag.jsx
┃ ┣ Progress.jsx
┃ ┣ ProjecItem.jsx
┃ ┣ Projects.jsx
┃ ┣ SEO.jsx
┃ ┣ ServiceCard.jsx
┃ ┣ SiteName.jsx
┃ ┣ Skills.jsx
┃ ┗ Testimonial.jsx
┣ data/
┃ ┣ client.js
┃ ┣ posts.js
┃ ┣ services.js
┃ ┗ skills.js
┣ pages/
┃ ┣ admin/
┃ ┃ ┗ edit/
┃ ┣ api/
┃ ┃ ┗ hello.js
┃ ┣ bgp/
┃ ┃ ┗ index.jsx
┃ ┣ bigcart/
┃ ┃ ┗ index.jsx
┃ ┣ blog/
┃ ┃ ┣ index.jsx
┃ ┃ ┗ [slug].jsx
┃ ┣ contact/
┃ ┃ ┗ index.jsx
┃ ┣ customerNeeds/
┃ ┃ ┗ index.jsx
┃ ┣ djblog/
┃ ┃ ┗ index.jsx
┃ ┣ drfstore/
┃ ┃ ┗ index.jsx
┃ ┣ eccomerce/
┃ ┃ ┗ index.jsx
┃ ┣ eventtech/
┃ ┃ ┗ index.jsx
┃ ┣ flaressa/
┃ ┃ ┗ index.js
┃ ┣ github/
┃ ┃ ┗ index.jsx
┃ ┣ innovative/
┃ ┃ ┗ index.jsx
┃ ┣ metaverse/
┃ ┃ ┗ index.jsx
┃ ┣ platformManager/
┃ ┃ ┗ index.jsx
┃ ┣ service/
┃ ┃ ┗ index.jsx
┃ ┣ signup/
┃ ┣ upwork/
┃ ┣ vlan/
┃ ┃ ┗ index.jsx
┃ ┣ 404.js
┃ ┣ 500.js
┃ ┣ index.js
┃ ┣ _app.js
┃ ┗ _document.js
┣ public/
┃ ┣ blog-images/
┃ ┣ clients/
┃ ┃ ┣ avatar.png
┃ ┃ ┗ dwll.png
┃ ┣ icons/
┃ ┃ ┣ android-chrome-192x192.png
┃ ┃ ┣ android-chrome-512x512.png
┃ ┃ ┣ apple-touch-icon.png
┃ ┃ ┣ favicon-16x16.png
┃ ┃ ┗ favicon-32x32.png
┃ ┣ projects/
┃ ┃ ┣ bgp.webp
┃ ┃ ┣ bigcart.webp
┃ ┃ ┣ customerneeds.png
┃ ┃ ┣ djblogger.webp
┃ ┃ ┣ drf.webp
┃ ┃ ┣ ecommerce.webp
┃ ┃ ┣ eventtech.webp
┃ ┃ ┣ flaressa.webp
┃ ┃ ┣ github.webp
┃ ┃ ┣ home.webp
┃ ┃ ┣ inno.webp
┃ ┃ ┣ innoaps.webp
┃ ┃ ┣ metaverse.webp
┃ ┃ ┣ usermanager.webp
┃ ┃ ┗ vlan.webp
┃ ┣ skills/
┃ ┃ ┣ bootstrap.png
┃ ┃ ┣ ccna.png
┃ ┃ ┣ celery.png
┃ ┃ ┣ comptia.svg
┃ ┃ ┣ css.png
┃ ┃ ┣ django.png
┃ ┃ ┣ dns.webp
┃ ┃ ┣ docker.png
┃ ┃ ┣ drf.png
┃ ┃ ┣ googleWorkspace.webp
┃ ┃ ┣ html.png
┃ ┃ ┣ kali.png
┃ ┃ ┣ mtcna.png
┃ ┃ ┣ nextjs.webp
┃ ┃ ┣ office365.webp
┃ ┃ ┣ pagespeed.png
┃ ┃ ┣ redis.png
┃ ┃ ┣ security.png
┃ ┃ ┣ tailwindcss.png
┃ ┃ ┣ typescript.png
┃ ┃ ┣ ubuntu.webp
┃ ┃ ┗ wordPress.webp
┃ ┣ contactImg.webp
┃ ┣ favicon.ico
┃ ┣ manifest.json
┃ ┣ mushfiqur.jpg
┃ ┣ robots.txt
┃ ┣ sitemap-0.xml
┃ ┗ sitemap.xml
┣ styles/
┃ ┗ globals.css
┣ .eslintrc.json
┣ .gitattributes
┣ .gitignore
┣ jsconfig.json
┣ LICENSE
┣ next-sitemap.config.js
┣ next.config.js
┣ package-lock.json
┣ package.json
┣ postcss.config.js
┣ README.md
┣ SECURITY.md
┣ server.js
┗ tailwind.config.js
```
