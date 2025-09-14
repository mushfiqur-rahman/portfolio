const SiteSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          url: "https://mushfiq.xyz",
          name: "Mushfiqur Rahman Portfolio",
          description:
            "Get expert custom web development and reliable IT support services at mushfiq.xyz. From building high-performing websites to email & DNS management, we help your business run smoothly.",
        }),
        address: {
          "@type": "PostalAddress",
          addressCountry: "BD",
          addressRegion: "ASIA",
          addressLocality: "Khulna",
        },
      }}
    />
  );
};

export default SiteSchema;
