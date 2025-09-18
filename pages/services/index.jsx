import ServicesCard from "@/components/ServicesCard";
import Head from "next/head";
import React from "react";

const services = () => {
  return (
    <>
      <Head>
        <title>Remote IT Services</title>
        <link rel="canonical" href="/services" />
        <meta
          name="description"
          content="Border Gateway Protocol (BGP) is a standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems (AS) on the Internet. BGP is classified as a path-vector routing protocol, and it makes routing decisions based on paths, network policies, or rule-sets configured by a network administrator."
        />
        <meta
          name="keywords"
          content="cisco, vlan config, networking, lan config, it support engineer"
        />
      </Head>
      <div>
        <ServicesCard />
      </div>
    </>
  );
};

export default services;
