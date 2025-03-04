import Head from "next/head";

const SEO = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Web Development, IT Support, Next.js, Portfolio, Mushfiq"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/og-image.jpg"
      />
      <meta property="og:type" content="article" />
    </Head>
  );
};

export default SEO;
