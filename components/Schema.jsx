import Head from "next/head";

const Schema = ({ type = "website", data }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://mushfiq.xyz",
    name: "MUSHFIQ - IT Support Engineer | Web Developer",
    description:
      "I am Mushfiqur Rahman from Bangladesh, a web developer and IT support engineer. My services are Google Workspace administration, Microsoft Office 365 administration, email deliverability, WordPress website bug-free transfer, DNS management (GoDaddy, Cloudflare, Namecheap), website & DNS issue fixes (CNAME, A records, IP, redirects), spam or junk issue fix, email migration, and IT consultancy. You may hire me through international marketplaces, such as Upwork or Fiverr, or directly.",
  };

  const blogSchema =
    type === "blogpost" && data
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://mushfiq.xyz/blog/${data.slug}`,
          },
          headline: data.title,
          description: data.description,
          image: data.image || "https://mushfiq.xyz/default-og-image.jpg",
          author: {
            "@type": "Person",
            name: data.author || "Mushfiqur Rahman",
          },
          publisher: {
            "@type": "Organization",
            name: "Mushfiqur Rahman Portfolio",
            logo: {
              "@type": "ImageObject",
              url: "https://mushfiq.xyz/logo.png",
            },
          },
          datePublished: new Date(data.datePublished || "").toISOString(),
          dateModified: new Date(data.datePublished || "").toISOString(),
        }
      : null;

  const schema = type === "blogpost" && blogSchema ? blogSchema : baseSchema;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default Schema;
