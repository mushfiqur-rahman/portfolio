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
        <meta name="keywords" content="" />
      </Head>
      <div className="md:min-h-screen py-20">
        <ServiceCards />
      </div>
    </>
  );
};

export default index;
