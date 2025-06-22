import React from "react";
import Head from "next/head";
import Pricing from "@/components/Pricing";

const index = () => {
  return (
    <>
      <Head>
        <title>Remote Service</title>
        <link rel="canonical" href="/services" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <div>
        <Pricing />
      </div>
    </>
  );
};

export default index;
