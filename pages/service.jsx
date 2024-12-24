import MyServices from "@/components/MyServices";
import Head from "next/head";
import React from "react";

const myservices = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="canonical" href="/myservices" />
        <meta
          name="description"
          content="Mushfiqur Rahman provides these service, CC Camera Installation, IP Camera installation, Server Setup, Home and Office Network setup"
        />
        <meta
          name="keywords"
          content="CC Camera Installation, IP Camera installation, Server Setup, Home and Office Network setup, khulna, jashore, jessore, IT Support Engineer"
        />
      </Head>
      <div>
        <MyServices />
      </div>
    </>
  );
};

export default myservices;
