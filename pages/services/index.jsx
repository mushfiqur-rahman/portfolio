import React from "react";
import Head from "next/head";
import ServiceCards from "@/components/ServiceCards";

const index = () => {
  return (
    <>
      <Head>
        <title>Remote IT Services</title>
        <link rel="canonical" href="/services" />
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="dns management, dns configuration, email deliverability, email migration, data migration, freelancer, website development, domain migration, ssl certification, godaddy office 365 to microsoft 365, IMAP, squarespace, google worksapce, gsuit, office 365, remote it support, shopify developer, it support engineer"
        />
      </Head>
      <div className="md:min-h-screen py-20">
        <ServiceCards />
      </div>
    </>
  );
};

export default index;
