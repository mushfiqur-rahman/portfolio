const SiteSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: "https://mushfiq.xyz",
          name: "Mushfiqur Rahman Portfolio",
          description:
            "I'm Mushfiqur Rahman, this is my portfolio. I am looking for remote or hybrid job in python django webdeveloper position. I have been working at Upwork as a python django developer since 2022",
          addrress: "Chuknagar, Dumuria, Khulna - 9252",
          alumniOf: "ILACS(National University of Bangladesh), Khulha",
          birthPlace: "Chuknagar, Dumuria, Khulna - 9252",
          jobTitle: "Python Django Developer",
          nationality: "Bangladesh",
        }),
      }}
    />
  );
};

export default SiteSchema;
