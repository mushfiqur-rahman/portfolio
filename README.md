This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

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

```bash script
my-blog/
├── public/                     # Static assets (images, fonts, etc.)
│   └── images/                 # Store static images
├── src/
│   ├── components/             # Reusable components
│   │   ├── Header.js           # Header component
│   │   ├── Footer.js           # Footer component
│   │   └── CommentForm.js      # Comment form component
│   ├── lib/                    # Utility functions and configurations
│   │   └── supabase.js         # Supabase client initialization
│   ├── pages/
│   │   ├── api/                # API routes
│   │   │   ├── upload-image.js # Cloudinary image upload API
│   │   │   └── comments.js     # API for handling comments
│   │   ├── admin/              # Admin dashboard
│   │   │   └── index.js        # Admin dashboard page
│   │   ├── blog/               # Blog post pages
│   │   │   └── [slug].js       # Dynamic blog post page
│   │   ├── index.js            # Home page (list of blog posts)
│   │   ├── login.js            # User login page
│   │   └── signup.js           # User signup page
│   ├── styles/                 # CSS or SCSS files
│   │   └── globals.css         # Global styles
│   └── utils/                  # Utility functions
│       └── validation.js       # Validation functions (e.g., for comments)
├── .env.local                  # Environment variables (Supabase, Cloudinary)
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```
