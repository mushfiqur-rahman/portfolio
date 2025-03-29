import React from "react";
import SEO from "@/components/SEO";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const service = () => {
  return (
    <>
      <SEO
        title="Remote Services"
        keywords="Best email marketing setup for Google Workspace in the US, Microsoft 365 email marketing for businesses in the US, Affordable website development services in the US, squarespace dns configuration, email migration, domain migration in US, IT Service in the US"
        description="Explore my web development & IT services, including React, Next.js, Django, DNS setup, and mail migrations, Email Deliverability & Security, Domain & DNS Management, Expertise in GoDaddy, Cloudflare, Namecheap, Squarespace, HubSpot, IONOS, Bluehost, SiteGround, Shopify, HostGator, etc, Cold Email & Marketing Setup, CCTV Installation & Troubleshooting"
      />
      <div className="w-full min-h-screen py-12 pt-[100px]">
        <div className="max-w-[1240px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">My Services</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default service;
