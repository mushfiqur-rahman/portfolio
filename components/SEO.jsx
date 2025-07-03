import Head from "next/head";
import { useRouter } from "next/router";

const SEO = ({
  title,
  description,
  keywords,
  type = "website",
  schemaData,
}) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const canonicalUrl = `https://mushfiq.xyz${currentPath}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://mushfiq.xyz",
    name: "Mushfiqur Rahman Portfolio",
    description:
      "Experienced IT Support Engineer & Software Engineer helping US businesses with Microsoft 365, Google Workspace, DNS, email, and SEO-friendly websites.",
  };

  const blogSchema =
    type === "blogpost" && schemaData
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://mushfiq.xyz/blog/${schemaData.slug}`,
          },
          headline: schemaData.title,
          description: schemaData.description,
          image: schemaData.image || "https://mushfiq.xyz/default-og-image.jpg",
          author: {
            "@type": "Person",
            name: schemaData.author || "Mushfiqur Rahman",
          },
          publisher: {
            "@type": "Organization",
            name: "Mushfiqur Rahman Portfolio",
            logo: {
              "@type": "ImageObject",
              url: "https://mushfiq.xyz/logo.png",
            },
          },
          datePublished: new Date(schemaData.datePublished).toISOString(),
          dateModified: new Date(schemaData.datePublished).toISOString(),
        }
      : null;

  const structuredData = type === "blogpost" ? blogSchema : defaultSchema;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/og-image.jpg"
      />
      <meta property="og:type" content="article" />

      {/* Dynamic Canonical Tag */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
};

export default SEO;
