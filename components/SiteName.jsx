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
            "I am Mushfiqur Rahman from Bangladesh, a web developer and IT support engineer. My services are Google Workspace administration, Microsoft Office 365 administration, email deliverability, WordPress website bug-free transfer, DNS management (GoDaddy, Cloudflare, Namecheap), website & DNS issue fixes (CNAME, A records, IP, redirects), spam or junk issue fix, email migration, and IT consultancy. You may hire me through international marketplaces, such as Upwork or Fiverr, or directly.",
        }),
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
          addressRegion: "CA",
          addressLocality: "Los Angeles",
        },
      }}
    />
  );
};

export default SiteSchema;
